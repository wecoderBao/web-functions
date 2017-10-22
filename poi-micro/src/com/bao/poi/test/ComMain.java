package com.bao.poi.test;

import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.swing.JOptionPane;

import com.bao.poi.po.Book;
import com.bao.poi.po.CompanyRefresh;
import com.bao.poi.po.Student;
import com.bao.poi.util.ExportExcel;

public class ComMain {
	public static void main(String[] args)  
    {  
        // 测试学生  
        ExportExcel<CompanyRefresh> ex = new ExportExcel<CompanyRefresh>();  
        String[] headers =  
        { "区域", "公司名称", "联系电话", "详细地址", "刷新次数","消费金额" };  
        List<CompanyRefresh> dataset = new ArrayList<CompanyRefresh>();  
        dataset.add(new CompanyRefresh("洪山区", "爱尔眼科医院", "13164618323", "洪山区12号", "6","600"));  
        dataset.add(new CompanyRefresh("洪山区", "爱尔眼科医院", "13164618323", "洪山区12号", "6","600"));  
        dataset.add(new CompanyRefresh("洪山区", "爱尔眼科医院", "13164618323", "洪山区12号", "6","600"));  
       
        try  
        {   
            OutputStream out = new FileOutputStream("E://a.xls");   
            ex.exportExcel(headers, dataset, out);  
            out.close();  
            JOptionPane.showMessageDialog(null, "导出成功!");  
            System.out.println("excel导出成功！");  
        } catch (FileNotFoundException e) {  
            e.printStackTrace();  
        } catch (IOException e) {  
            e.printStackTrace();  
        }  
    }  
}
