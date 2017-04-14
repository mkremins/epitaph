(ns om-tools.core
  "Tools for Om"
  (:require
   [om.core :as om]
   [plumbing.fnk.schema]
   [plumbing.core :as p        :include-macros        true]
   [schema.core :as s        :include-macros        true]
                                 
                  )
       
          
                                  )

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Private

     
                                  
                                       
                                     
                                        
                                     
                                    
                                       
                                      
                                     
                                            
                                  
                                         

     
                            
                                                                
                                                             
                                                                      
                                                                      
                
        
          
                               
           
                                  

                  
                                
                                                     
                                                        
                                                                                            

            
                                                                           
            
                   

     
                    
                                                                   
                                                                       
                                                                        
                                                    
                                  
            
                                                       
                             
                                                      

     
                       
                                                             
            
                                                                

     
                             
                                                                     
                                                                    
                                                                 
                                                                           
                             
                    
                             
                                        
                 
                              
                                                    
                                                         
                          
                              
                                                 
                                                                      
                                    
     
                      
                                                                
                                                                      
                                                 
            
                    
                                                               
                     
                            
                                                                                            
                                                                
                             

     
                       
                                                                  
                                                                     
                       
        
                                            

     
                               
                                                               
                                                                    
                                                             
                    
         
                                                                                  
                                                   
                   

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; defcomponent/k validation

     
                                  
                      
                                 
                                  
                                        
                      

     
                            
                                                                   
        
                                                                      
                                     
                                                                           

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Public

      
(defn state-proxy
  "Returns an atom-like object for reading and writing Om component
   state.

   Note: Behavior may exactly not match atoms when deref'ing
   immediately following a reset!/swap! because Om processes state
   changes asynchronously in separate render phases."
  [owner]
  (when owner
    (let [get-state #(om/get-state owner)]
      (reify
        IDeref
        (-deref [_]
          (get-state))
        IReset
        (-reset! [_ v]
          (om/set-state! owner v))
        ISwap
        (-swap! [s f]
          (-reset! s (f (get-state))))
        (-swap! [s f x]
          (-reset! s (f (get-state) x)))
        (-swap! [s f x y]
          (-reset! s (f (get-state) x y)))
        (-swap! [s f x y more]
          (-reset! s (apply f (get-state) x y more)))))))

                   
                                                                   
                                                                 
                                                             
                  
                
                   
                
               
                  
                
                        
            
                  

                                    
                            

           

             
                           
                        

                                                                                 
                               
          
                               
                                   

                      
                                                                             
                                                                       
                                                                                      
                                                              

           
                                     
                            
                          

                                                 
                  
                
                   
                
               
                  
                
                        
            
                  

           
                                                                                     
                                                                              

                                                                                      
                                                                                          

                           
                                                                 
                                                                                          
                                                                                                                                                    
               
                                                                
                                                           
                             
                                                              
                                                      
                                                                             
        
                  
                    
                                           
                                       
                 
                                             
                                                                  
                                                        

                       
                                                                             
                                                                         
                                                            

                                                                  
                     

                                                       
                                                            
                                       
                                                         
                                             
                                                                        
                              

                                                                     
                                                           

           

                                                         
                         
                        
                                                                                                                                             
               
                                                                
                                                           
                             
                                                              
                                                      
                                                                            
                                  
                                                    
                                                                                    
        
                  
                                                        
                                                                  
                                                                                        
                    
                                             
                                         
                                       
                          
                        
                              
                        
                                                                  
                                                       
                                                                 
                                                        
                                                        

                            
                                                                     

                                                                                           
                             

                                                                                   
                                                                              
                    

                                                                  
                     

                                   
                                  
                                                                         
                                                       
                                                                      
                                                                                
                                        
                                   
            
                                         

      
(defn set-state?!
  "Calls om.core/set-state! when current value not= to v and returns
   updated owner, otherwise nil.
   Used to prevent no-op updates from entering render queue"
  {:added "0.2.0"}
  ([owner v]
     (when-not (= v (om/get-state owner))
       (om/set-state! owner v)))
  ([owner korks v]
     (when-not (= v (om/get-state owner korks))
       (om/set-state! owner korks v))))

;;;;;;;;;;;; This file autogenerated from src/om_tools/core.cljx
