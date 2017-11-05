package com.bao.springboot.pojo;

public class TGua {
    private Integer id;

    private Integer code;

    private String guaCi;

    private String guaName;

    private String guaModel;

    private String guaCiDesc;

    private String guaCiXiang;

    private String guaCiXiangDesc;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getGuaCi() {
        return guaCi;
    }

    public void setGuaCi(String guaCi) {
        this.guaCi = guaCi == null ? null : guaCi.trim();
    }

    public String getGuaName() {
        return guaName;
    }

    public void setGuaName(String guaName) {
        this.guaName = guaName == null ? null : guaName.trim();
    }

    public String getGuaModel() {
        return guaModel;
    }

    public void setGuaModel(String guaModel) {
        this.guaModel = guaModel == null ? null : guaModel.trim();
    }

    public String getGuaCiDesc() {
        return guaCiDesc;
    }

    public void setGuaCiDesc(String guaCiDesc) {
        this.guaCiDesc = guaCiDesc == null ? null : guaCiDesc.trim();
    }

    public String getGuaCiXiang() {
        return guaCiXiang;
    }

    public void setGuaCiXiang(String guaCiXiang) {
        this.guaCiXiang = guaCiXiang == null ? null : guaCiXiang.trim();
    }

    public String getGuaCiXiangDesc() {
        return guaCiXiangDesc;
    }

    public void setGuaCiXiangDesc(String guaCiXiangDesc) {
        this.guaCiXiangDesc = guaCiXiangDesc == null ? null : guaCiXiangDesc.trim();
    }
}