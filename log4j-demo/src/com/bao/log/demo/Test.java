package com.bao.log.demo;

import org.apache.commons.logging.Log; 
import org.apache.commons.logging.LogFactory; 

public class Test { 

   // 在任何需要记录日志的类中 
   Log log = LogFactory.getLog( this .getClass()); 
   public void one() { 
	  if(log.isInfoEnabled())
		  log .info( "into one method" ); 
      try { 
         System. out .println(9/0); 
      } catch (RuntimeException e) { 
         log .error(e.getMessage()); 
      } 
      if(log.isInfoEnabled())
    	  log .info( "out one method" ); 
   } 

   public static void main(String[] args) { 
      new Test().one(); 
   } 
} 

