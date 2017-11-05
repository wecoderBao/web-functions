package com.bao.springboot.pojo;

public class TYao {
    private Integer id;

    private Integer guaCode;

    private String yaoCi;

    private String yaoCiName;

    private String yaoCiDesc;

    private String yaoCiXiang;

    private String yaoCiXiangDesc;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getGuaCode() {
        return guaCode;
    }

    public void setGuaCode(Integer guaCode) {
        this.guaCode = guaCode;
    }

    public String getYaoCi() {
        return yaoCi;
    }

    public void setYaoCi(String yaoCi) {
        this.yaoCi = yaoCi == null ? null : yaoCi.trim();
    }

    public String getYaoCiName() {
        return yaoCiName;
    }

    public void setYaoCiName(String yaoCiName) {
        this.yaoCiName = yaoCiName == null ? null : yaoCiName.trim();
    }

    public String getYaoCiDesc() {
        return yaoCiDesc;
    }

    public void setYaoCiDesc(String yaoCiDesc) {
        this.yaoCiDesc = yaoCiDesc == null ? null : yaoCiDesc.trim();
    }

    public String getYaoCiXiang() {
        return yaoCiXiang;
    }

    public void setYaoCiXiang(String yaoCiXiang) {
        this.yaoCiXiang = yaoCiXiang == null ? null : yaoCiXiang.trim();
    }

    public String getYaoCiXiangDesc() {
        return yaoCiXiangDesc;
    }

    public void setYaoCiXiangDesc(String yaoCiXiangDesc) {
        this.yaoCiXiangDesc = yaoCiXiangDesc == null ? null : yaoCiXiangDesc.trim();
    }
}