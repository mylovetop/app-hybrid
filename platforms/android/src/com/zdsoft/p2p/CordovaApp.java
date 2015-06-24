/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package com.zdsoft.p2p;

import android.os.Bundle;

import org.apache.cordova.*;

import android.view.KeyEvent;
import android.app.Activity;
import android.app.AlertDialog;
import android.app.Dialog;
import android.content.DialogInterface;

public class CordovaApp extends CordovaActivity
{
//    @SuppressWarnings("deprecation")
	@Override
    public void onCreate(Bundle savedInstanceState)
    {
//    	super.setIntegerProperty("loadUrlTimeoutValue", 60000);
//    	super.setIntegerProperty("splashscreen", R.drawable.screen);
    	
    	super.loadUrlTimeoutValue = 60000;
    	super.splashscreen = R.drawable.screen;
    	
        super.onCreate(savedInstanceState);
        super.init();
        // Set by <content src="index.html" /> in config.xml
        loadUrl(launchUrl);
    }
    
    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event){
    	if (keyCode == KeyEvent.KEYCODE_BACK && event.getRepeatCount() == 0)  
        {  
    	   exitSystem();
           return true;
        }  

    	return super.onKeyDown(keyCode, event);
    }
    
    @Override  
    public boolean dispatchKeyEvent(KeyEvent event) {  
        if (event.getKeyCode() == KeyEvent.KEYCODE_BACK    
                && event.getAction() == KeyEvent.ACTION_DOWN    
                && event.getRepeatCount() == 0) { 
        	exitSystem();
            return true; 
        }   
        return super.dispatchKeyEvent(event);  
    }
    
    //退出系统按钮
    private void exitSystem(){
    	Dialog alertDialog = new AlertDialog.Builder(this). 
                setTitle("温馨提示"). 
                setMessage("是否退出应用?").
//                setIcon(R.drawable.icon).
                setNegativeButton("否", new DialogInterface.OnClickListener() { 
	                    @Override 
	                    public void onClick(DialogInterface dialog, int which) { 
	                        // TODO Auto-generated method stub  
	                    	dialog.dismiss();
	                    } 
                }).
                setPositiveButton("是", new DialogInterface.OnClickListener() { 
                    @Override 
                    public void onClick(DialogInterface dialog, int which) { 
                        // TODO Auto-generated method stub  
                    	//关闭程序
                    	android.os.Process.killProcess(android.os.Process.myPid());
                    } 
                }).
                create(); 
		//设置弹框的空白地方、返回按钮不可点击
		alertDialog.setCancelable(false);
        alertDialog.show();
    }
    
    
    private void alertDialog(){
    	Dialog alertDialog = new AlertDialog.Builder(this). 
                setTitle("温馨提示"). 
                setMessage("请检测网络是否连接！").
//                setIcon(R.drawable.icon).
                setPositiveButton("确定", new DialogInterface.OnClickListener() { 
	                    @Override 
	                    public void onClick(DialogInterface dialog, int which) { 
	                        // TODO Auto-generated method stub  
	                    	//关闭程序
	                    	android.os.Process.killProcess(android.os.Process.myPid());
	                    } 
                }).
                create(); 
		//设置弹框的空白地方、返回按钮不可点击
		alertDialog.setCancelable(false);
        alertDialog.show();
    }
    
    @Override  
    public void onReceivedError(int arg0, String arg1, String arg2) {  
//        this.alertDialog();  
        return;  
    }  
}
