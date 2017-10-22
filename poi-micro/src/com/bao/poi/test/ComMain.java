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
        // ����ѧ��  
        ExportExcel<CompanyRefresh> ex = new ExportExcel<CompanyRefresh>();  
        String[] headers =  
        { "����", "��˾����", "��ϵ�绰", "��ϸ��ַ", "ˢ�´���","���ѽ��" };  
        List<CompanyRefresh> dataset = new ArrayList<CompanyRefresh>();  
        dataset.add(new CompanyRefresh("��ɽ��", "�����ۿ�ҽԺ", "13164618323", "��ɽ��12��", "6","600"));  
        dataset.add(new CompanyRefresh("��ɽ��", "�����ۿ�ҽԺ", "13164618323", "��ɽ��12��", "6","600"));  
        dataset.add(new CompanyRefresh("��ɽ��", "�����ۿ�ҽԺ", "13164618323", "��ɽ��12��", "6","600"));  
       
        try  
        {   
            OutputStream out = new FileOutputStream("E://a.xls");   
            ex.exportExcel(headers, dataset, out);  
            out.close();  
            JOptionPane.showMessageDialog(null, "�����ɹ�!");  
            System.out.println("excel�����ɹ���");  
        } catch (FileNotFoundException e) {  
            e.printStackTrace();  
        } catch (IOException e) {  
            e.printStackTrace();  
        }  
    }  
}
