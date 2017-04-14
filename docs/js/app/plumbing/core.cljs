(ns plumbing.core
  "Utility belt for Clojure in the wild"
  (:refer-clojure :exclude [update])
        
  (:require-macros
   [plumbing.core :refer [for-map lazy-get -unless-update]]
   [schema.macros :as schema-macros])
  (:require
   [schema.utils :as schema-utils]
                                          
   [plumbing.fnk.schema :as schema :include-macros true]
                                         ))

                                      

(def ^:private +none+
  "A sentinel value representing missing portions of the input data."
  ::missing)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Maps

                 
                                                                            
                                                                     
                                                          

                                                              
                                                        

                                                                     
                                                                     
                                
                                                             
                                      
                                          
                         
                                
                                                                  
                                 

                        
                                                                       
                                   
        
                         
         
                         
                         
                                                  
                                                       
              

(-unless-update
 (defn update
   "Updates the value in map m at k with the function f.

    Like update-in, but for updating a single top-level key.
    Any additional args will be passed to f after the value.

    WARNING As of Clojure 1.7 this function exists in clojure.core and
    will not be exported by this namespace."
   ([m k f] (assoc m k (f (get m k))))
   ([m k f x1] (assoc m k (f (get m k) x1)))
   ([m k f x1 x2] (assoc m k (f (get m k) x1 x2)))
   ([m k f x1 x2 & xs] (assoc m k (apply f (get m k) x1 x2 xs)))))

(defn map-vals
  "Build map k -> (f v) for [k v] in map, preserving the initial type"
  [f m]
  (cond
   (sorted? m)
   (reduce-kv (fn [out-m k v] (assoc out-m k (f v))) (sorted-map) m)
   (map? m)
   (persistent! (reduce-kv (fn [out-m k v] (assoc! out-m k (f v))) (transient {}) m))
   :else
   (for-map [[k v] m] k (f v))))

(defn map-keys
  "Build map (f k) -> v for [k v] in map m"
  [f m]
  (if (map? m)
    (persistent! (reduce-kv (fn [out-m k v] (assoc! out-m (f k) v)) (transient {}) m))
    (for-map [[k v] m] (f k) v)))

(defn map-from-keys
  "Build map k -> (f k) for keys in ks"
  [f ks]
  (for-map [k ks] k (f k)))

(defn map-from-vals
  "Build map (f v) -> v for vals in vs"
  [f vs]
  (for-map [v vs] (f v) v))

(defn dissoc-in
  "Dissociate this keyseq from m, removing any empty maps created as a result
   (including at the top-level)."
  [m [k & ks]]
  (when m
    (if-let [res (and ks (dissoc-in (get m k) ks))]
      (assoc m k res)
      (let [res (dissoc m k)]
        (when-not (empty? res)
          res)))))

(defn keywordize-map
  "Recursively convert maps in m (including itself)
   to have keyword keys instead of string"
  [x]
  (cond
   (map? x)
   (for-map [[k v] x]
     (if (string? k) (keyword k) k) (keywordize-map v))
   (seq? x)
   (map keywordize-map x)
   (vector? x)
   (mapv keywordize-map x)
   :else
   x))

                  
                                   
         
                               
                
         

(defn safe-get
  "Like get but throw an exception if not found"
  [m k]
  (lazy-get
   m k
   (schema/assert-iae false "Key %s not found in %s" k (mapv key m))))

(defn safe-get-in
  "Like get-in but throws exception if not found"
  [m ks]
  (if (seq ks)
    (recur (safe-get m (first ks)) (next ks))
    m))

(defn assoc-when
  "Like assoc but only assocs when value is truthy"
  [m & kvs]
  (assert (even? (count kvs)))
  (into (or m {})
        (for [[k v] (partition 2 kvs)
              :when v]
          [k v])))

(defn update-in-when
  "Like update-in but returns m unchanged if key-seq is not present."
  [m key-seq f & args]
  (let [found (get-in m key-seq +none+)]
    (if-not (identical? +none+ found)
      (assoc-in m key-seq (apply f found args))
      m)))

(defn grouped-map
  "Like group-by, but accepts a map-fn that is applied to values before
   collected."
  [key-fn map-fn coll]
  (persistent!
   (reduce
    (fn [ret x]
      (let [k (key-fn x)]
        (assoc! ret k (conj (get ret k []) (map-fn x)))))
    (transient {}) coll)))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Seqs

(defn aconcat
  "Like (apply concat s) but lazier (and shorter) "
  [s]
  (lazy-cat (first s) (when-let [n (next s)] (aconcat n))))

(defn unchunk
  "Takes a seqable and returns a lazy sequence that
   is maximally lazy and doesn't realize elements due to either
   chunking or apply.

   Useful when you don't want chunking, for instance,
   (first awesome-website? (map slurp +a-bunch-of-urls+))
   may slurp up to 31 unneed webpages, wherease
   (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
   is guaranteed to stop slurping after the first awesome website.

  Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci"
  [s]
  (when (seq s)
    (cons (first s)
          (lazy-seq (unchunk (rest s))))))

(defn sum
  "Return sum of (f x) for each x in xs"
  ([f xs] (reduce + (map f xs)))
  ([xs] (reduce + xs)))

(defn singleton
  "returns (first xs) when xs has only 1 element"
  [xs]
  (when-let [xs (seq xs)]
    (when-not (next xs)
      (first xs))))

(defn indexed
  "Returns [idx x] for x in seqable s"
  [s]
  (map-indexed vector s))

(defn positions
  "Returns indices idx of sequence s where (f (nth s idx))"
  [f s]
  (keep-indexed (fn [i x] (when (f x) i)) s))

     
                      
                                             
                                                              
                                          
      
                                 
                 
                                                             
                   

     
                   
                                          
                                                              
                                          
      
                               
                                                             

(defn distinct-by
  "Returns elements of xs which return unique
   values according to f. If multiple elements of xs return the same
   value under f, the first is returned"
  [f xs]
  (let [s (atom #{})]
    (for [x xs
          :let [id (f x)]
          :when (not (contains? @s id))]
      (do (swap! s conj id)
          x))))

     
                 
                                                                              
      
                                       
                 
                      
                                            

(defn interleave-all
  "Analogy: partition:partition-all :: interleave:interleave-all"
  [& colls]
  (lazy-seq
   ((fn helper [seqs]
      (when (seq seqs)
        (concat (map first seqs)
                (lazy-seq (helper (keep next seqs))))))
    (keep seq colls))))

(defn count-when
  "Returns # of elements of xs where pred holds"
  [pred xs]
  (count (filter pred xs)))

(defn conj-when
  "Like conj but ignores non-truthy values"
  ([coll x] (if x (conj coll x) coll))
  ([coll x & xs]
     (if xs
       (recur (conj-when coll x)
              (first xs)
              (next xs))
       (conj-when coll x))))

(defn cons-when
  "Like cons but does nothing if x is non-truthy."
  [x s]
  (if x (cons x s) s))

(def rsort-by
  "Like sort-by, but prefers higher values rather than lower ones."
  (comp reverse sort-by))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Control flow

             
                                                                          
                 
              
                                        
                   

            
                                                                        
                     
              
                     
           

              
                                         
          
                            

               
                                          
          
                             

            
                         

                                                        

                                                           
                                
          
                                      

               
                                               
                         
                                                                  

                     
                                                     

                                                                                        
                                                                                           
                                                                 
                    
                      
                    
                   
                         
                                          
             
                                
                                      
                     

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Miscellaneous

(defn swap-pair!
  "Like swap! but returns a pair [old-val new-val]"
  ([a f]
     (loop []
       (let [old-val @a
             new-val (f old-val)]
         (if (compare-and-set! a old-val new-val)
           [old-val new-val]
           (recur)))))
  ([a f & args]
     (swap-pair! a #(apply f % args))))

(defn get-and-set!
  "Like reset! but returns old-val"
  [a new-val]
  (first (swap-pair! a (constantly new-val))))

(defn millis ^long []
                                   
         (.getTime (js/Date.)))

(defn mapply
  "Like apply, but applies a map to a function with positional map
  arguments. Can take optional initial args just like apply."
  ([f m] (apply f (apply concat m)))
  ([f arg & args] (apply f arg (concat (butlast args) (apply concat (last args))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; fnk

              
                                                                                     
                                                                      
                                                                            
                                                                            
                                                       
                                             
                                                                                 
                                                                                         
                                                                                    

                                                                                     
                                                            
                                                        

                                                                                    

                                                                                             
                                                             
                                   

                                                                          
                   
                                                                        
                                                                                               
         
                                             
                            
                                                     
                                                                                  
                                              
                                                                                          
                                            
                                                         
                                                    
               
                                     

                 
                                

                                                                         
                            
                  
                                    
                       
                                                                            
                                                                                         
                                              
                         
                   
                               
                    
                      

                   
                                

                                                                                 
                   
                                   

             
                                                                            
                                                       

                                                                       
                                                                             
                 

                                                                            
                                                                          
                                                                                
                                                     

                                                                    
                                                                               
          
                                                    
                                                                                       
                                       
                                                                                     
                                              

               
                                  
                
                                                                                     
                                                                          
                                                
                                            
                                                                                
                                                                                
                                                    
                                                                                                
               

                                       

;;;;;;;;;;;; This file autogenerated from src/plumbing/core.cljx
