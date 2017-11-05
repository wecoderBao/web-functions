package com.bao.springboot.pojo;

import java.util.ArrayList;
import java.util.List;

public class TYaoExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public TYaoExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andIdIsNull() {
            addCriterion("id is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("id is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(Integer value) {
            addCriterion("id =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(Integer value) {
            addCriterion("id <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(Integer value) {
            addCriterion("id >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("id >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(Integer value) {
            addCriterion("id <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(Integer value) {
            addCriterion("id <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<Integer> values) {
            addCriterion("id in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<Integer> values) {
            addCriterion("id not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(Integer value1, Integer value2) {
            addCriterion("id between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(Integer value1, Integer value2) {
            addCriterion("id not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andGuaCodeIsNull() {
            addCriterion("gua_code is null");
            return (Criteria) this;
        }

        public Criteria andGuaCodeIsNotNull() {
            addCriterion("gua_code is not null");
            return (Criteria) this;
        }

        public Criteria andGuaCodeEqualTo(Integer value) {
            addCriterion("gua_code =", value, "guaCode");
            return (Criteria) this;
        }

        public Criteria andGuaCodeNotEqualTo(Integer value) {
            addCriterion("gua_code <>", value, "guaCode");
            return (Criteria) this;
        }

        public Criteria andGuaCodeGreaterThan(Integer value) {
            addCriterion("gua_code >", value, "guaCode");
            return (Criteria) this;
        }

        public Criteria andGuaCodeGreaterThanOrEqualTo(Integer value) {
            addCriterion("gua_code >=", value, "guaCode");
            return (Criteria) this;
        }

        public Criteria andGuaCodeLessThan(Integer value) {
            addCriterion("gua_code <", value, "guaCode");
            return (Criteria) this;
        }

        public Criteria andGuaCodeLessThanOrEqualTo(Integer value) {
            addCriterion("gua_code <=", value, "guaCode");
            return (Criteria) this;
        }

        public Criteria andGuaCodeIn(List<Integer> values) {
            addCriterion("gua_code in", values, "guaCode");
            return (Criteria) this;
        }

        public Criteria andGuaCodeNotIn(List<Integer> values) {
            addCriterion("gua_code not in", values, "guaCode");
            return (Criteria) this;
        }

        public Criteria andGuaCodeBetween(Integer value1, Integer value2) {
            addCriterion("gua_code between", value1, value2, "guaCode");
            return (Criteria) this;
        }

        public Criteria andGuaCodeNotBetween(Integer value1, Integer value2) {
            addCriterion("gua_code not between", value1, value2, "guaCode");
            return (Criteria) this;
        }

        public Criteria andYaoCiIsNull() {
            addCriterion("yao_ci is null");
            return (Criteria) this;
        }

        public Criteria andYaoCiIsNotNull() {
            addCriterion("yao_ci is not null");
            return (Criteria) this;
        }

        public Criteria andYaoCiEqualTo(String value) {
            addCriterion("yao_ci =", value, "yaoCi");
            return (Criteria) this;
        }

        public Criteria andYaoCiNotEqualTo(String value) {
            addCriterion("yao_ci <>", value, "yaoCi");
            return (Criteria) this;
        }

        public Criteria andYaoCiGreaterThan(String value) {
            addCriterion("yao_ci >", value, "yaoCi");
            return (Criteria) this;
        }

        public Criteria andYaoCiGreaterThanOrEqualTo(String value) {
            addCriterion("yao_ci >=", value, "yaoCi");
            return (Criteria) this;
        }

        public Criteria andYaoCiLessThan(String value) {
            addCriterion("yao_ci <", value, "yaoCi");
            return (Criteria) this;
        }

        public Criteria andYaoCiLessThanOrEqualTo(String value) {
            addCriterion("yao_ci <=", value, "yaoCi");
            return (Criteria) this;
        }

        public Criteria andYaoCiLike(String value) {
            addCriterion("yao_ci like", value, "yaoCi");
            return (Criteria) this;
        }

        public Criteria andYaoCiNotLike(String value) {
            addCriterion("yao_ci not like", value, "yaoCi");
            return (Criteria) this;
        }

        public Criteria andYaoCiIn(List<String> values) {
            addCriterion("yao_ci in", values, "yaoCi");
            return (Criteria) this;
        }

        public Criteria andYaoCiNotIn(List<String> values) {
            addCriterion("yao_ci not in", values, "yaoCi");
            return (Criteria) this;
        }

        public Criteria andYaoCiBetween(String value1, String value2) {
            addCriterion("yao_ci between", value1, value2, "yaoCi");
            return (Criteria) this;
        }

        public Criteria andYaoCiNotBetween(String value1, String value2) {
            addCriterion("yao_ci not between", value1, value2, "yaoCi");
            return (Criteria) this;
        }

        public Criteria andYaoCiNameIsNull() {
            addCriterion("yao_ci_name is null");
            return (Criteria) this;
        }

        public Criteria andYaoCiNameIsNotNull() {
            addCriterion("yao_ci_name is not null");
            return (Criteria) this;
        }

        public Criteria andYaoCiNameEqualTo(String value) {
            addCriterion("yao_ci_name =", value, "yaoCiName");
            return (Criteria) this;
        }

        public Criteria andYaoCiNameNotEqualTo(String value) {
            addCriterion("yao_ci_name <>", value, "yaoCiName");
            return (Criteria) this;
        }

        public Criteria andYaoCiNameGreaterThan(String value) {
            addCriterion("yao_ci_name >", value, "yaoCiName");
            return (Criteria) this;
        }

        public Criteria andYaoCiNameGreaterThanOrEqualTo(String value) {
            addCriterion("yao_ci_name >=", value, "yaoCiName");
            return (Criteria) this;
        }

        public Criteria andYaoCiNameLessThan(String value) {
            addCriterion("yao_ci_name <", value, "yaoCiName");
            return (Criteria) this;
        }

        public Criteria andYaoCiNameLessThanOrEqualTo(String value) {
            addCriterion("yao_ci_name <=", value, "yaoCiName");
            return (Criteria) this;
        }

        public Criteria andYaoCiNameLike(String value) {
            addCriterion("yao_ci_name like", value, "yaoCiName");
            return (Criteria) this;
        }

        public Criteria andYaoCiNameNotLike(String value) {
            addCriterion("yao_ci_name not like", value, "yaoCiName");
            return (Criteria) this;
        }

        public Criteria andYaoCiNameIn(List<String> values) {
            addCriterion("yao_ci_name in", values, "yaoCiName");
            return (Criteria) this;
        }

        public Criteria andYaoCiNameNotIn(List<String> values) {
            addCriterion("yao_ci_name not in", values, "yaoCiName");
            return (Criteria) this;
        }

        public Criteria andYaoCiNameBetween(String value1, String value2) {
            addCriterion("yao_ci_name between", value1, value2, "yaoCiName");
            return (Criteria) this;
        }

        public Criteria andYaoCiNameNotBetween(String value1, String value2) {
            addCriterion("yao_ci_name not between", value1, value2, "yaoCiName");
            return (Criteria) this;
        }

        public Criteria andYaoCiDescIsNull() {
            addCriterion("yao_ci_desc is null");
            return (Criteria) this;
        }

        public Criteria andYaoCiDescIsNotNull() {
            addCriterion("yao_ci_desc is not null");
            return (Criteria) this;
        }

        public Criteria andYaoCiDescEqualTo(String value) {
            addCriterion("yao_ci_desc =", value, "yaoCiDesc");
            return (Criteria) this;
        }

        public Criteria andYaoCiDescNotEqualTo(String value) {
            addCriterion("yao_ci_desc <>", value, "yaoCiDesc");
            return (Criteria) this;
        }

        public Criteria andYaoCiDescGreaterThan(String value) {
            addCriterion("yao_ci_desc >", value, "yaoCiDesc");
            return (Criteria) this;
        }

        public Criteria andYaoCiDescGreaterThanOrEqualTo(String value) {
            addCriterion("yao_ci_desc >=", value, "yaoCiDesc");
            return (Criteria) this;
        }

        public Criteria andYaoCiDescLessThan(String value) {
            addCriterion("yao_ci_desc <", value, "yaoCiDesc");
            return (Criteria) this;
        }

        public Criteria andYaoCiDescLessThanOrEqualTo(String value) {
            addCriterion("yao_ci_desc <=", value, "yaoCiDesc");
            return (Criteria) this;
        }

        public Criteria andYaoCiDescLike(String value) {
            addCriterion("yao_ci_desc like", value, "yaoCiDesc");
            return (Criteria) this;
        }

        public Criteria andYaoCiDescNotLike(String value) {
            addCriterion("yao_ci_desc not like", value, "yaoCiDesc");
            return (Criteria) this;
        }

        public Criteria andYaoCiDescIn(List<String> values) {
            addCriterion("yao_ci_desc in", values, "yaoCiDesc");
            return (Criteria) this;
        }

        public Criteria andYaoCiDescNotIn(List<String> values) {
            addCriterion("yao_ci_desc not in", values, "yaoCiDesc");
            return (Criteria) this;
        }

        public Criteria andYaoCiDescBetween(String value1, String value2) {
            addCriterion("yao_ci_desc between", value1, value2, "yaoCiDesc");
            return (Criteria) this;
        }

        public Criteria andYaoCiDescNotBetween(String value1, String value2) {
            addCriterion("yao_ci_desc not between", value1, value2, "yaoCiDesc");
            return (Criteria) this;
        }

        public Criteria andYaoCiXiangIsNull() {
            addCriterion("yao_ci_xiang is null");
            return (Criteria) this;
        }

        public Criteria andYaoCiXiangIsNotNull() {
            addCriterion("yao_ci_xiang is not null");
            return (Criteria) this;
        }

        public Criteria andYaoCiXiangEqualTo(String value) {
            addCriterion("yao_ci_xiang =", value, "yaoCiXiang");
            return (Criteria) this;
        }

        public Criteria andYaoCiXiangNotEqualTo(String value) {
            addCriterion("yao_ci_xiang <>", value, "yaoCiXiang");
            return (Criteria) this;
        }

        public Criteria andYaoCiXiangGreaterThan(String value) {
            addCriterion("yao_ci_xiang >", value, "yaoCiXiang");
            return (Criteria) this;
        }

        public Criteria andYaoCiXiangGreaterThanOrEqualTo(String value) {
            addCriterion("yao_ci_xiang >=", value, "yaoCiXiang");
            return (Criteria) this;
        }

        public Criteria andYaoCiXiangLessThan(String value) {
            addCriterion("yao_ci_xiang <", value, "yaoCiXiang");
            return (Criteria) this;
        }

        public Criteria andYaoCiXiangLessThanOrEqualTo(String value) {
            addCriterion("yao_ci_xiang <=", value, "yaoCiXiang");
            return (Criteria) this;
        }

        public Criteria andYaoCiXiangLike(String value) {
            addCriterion("yao_ci_xiang like", value, "yaoCiXiang");
            return (Criteria) this;
        }

        public Criteria andYaoCiXiangNotLike(String value) {
            addCriterion("yao_ci_xiang not like", value, "yaoCiXiang");
            return (Criteria) this;
        }

        public Criteria andYaoCiXiangIn(List<String> values) {
            addCriterion("yao_ci_xiang in", values, "yaoCiXiang");
            return (Criteria) this;
        }

        public Criteria andYaoCiXiangNotIn(List<String> values) {
            addCriterion("yao_ci_xiang not in", values, "yaoCiXiang");
            return (Criteria) this;
        }

        public Criteria andYaoCiXiangBetween(String value1, String value2) {
            addCriterion("yao_ci_xiang between", value1, value2, "yaoCiXiang");
            return (Criteria) this;
        }

        public Criteria andYaoCiXiangNotBetween(String value1, String value2) {
            addCriterion("yao_ci_xiang not between", value1, value2, "yaoCiXiang");
            return (Criteria) this;
        }

        public Criteria andYaoCiXiangDescIsNull() {
            addCriterion("yao_ci_xiang_desc is null");
            return (Criteria) this;
        }

        public Criteria andYaoCiXiangDescIsNotNull() {
            addCriterion("yao_ci_xiang_desc is not null");
            return (Criteria) this;
        }

        public Criteria andYaoCiXiangDescEqualTo(String value) {
            addCriterion("yao_ci_xiang_desc =", value, "yaoCiXiangDesc");
            return (Criteria) this;
        }

        public Criteria andYaoCiXiangDescNotEqualTo(String value) {
            addCriterion("yao_ci_xiang_desc <>", value, "yaoCiXiangDesc");
            return (Criteria) this;
        }

        public Criteria andYaoCiXiangDescGreaterThan(String value) {
            addCriterion("yao_ci_xiang_desc >", value, "yaoCiXiangDesc");
            return (Criteria) this;
        }

        public Criteria andYaoCiXiangDescGreaterThanOrEqualTo(String value) {
            addCriterion("yao_ci_xiang_desc >=", value, "yaoCiXiangDesc");
            return (Criteria) this;
        }

        public Criteria andYaoCiXiangDescLessThan(String value) {
            addCriterion("yao_ci_xiang_desc <", value, "yaoCiXiangDesc");
            return (Criteria) this;
        }

        public Criteria andYaoCiXiangDescLessThanOrEqualTo(String value) {
            addCriterion("yao_ci_xiang_desc <=", value, "yaoCiXiangDesc");
            return (Criteria) this;
        }

        public Criteria andYaoCiXiangDescLike(String value) {
            addCriterion("yao_ci_xiang_desc like", value, "yaoCiXiangDesc");
            return (Criteria) this;
        }

        public Criteria andYaoCiXiangDescNotLike(String value) {
            addCriterion("yao_ci_xiang_desc not like", value, "yaoCiXiangDesc");
            return (Criteria) this;
        }

        public Criteria andYaoCiXiangDescIn(List<String> values) {
            addCriterion("yao_ci_xiang_desc in", values, "yaoCiXiangDesc");
            return (Criteria) this;
        }

        public Criteria andYaoCiXiangDescNotIn(List<String> values) {
            addCriterion("yao_ci_xiang_desc not in", values, "yaoCiXiangDesc");
            return (Criteria) this;
        }

        public Criteria andYaoCiXiangDescBetween(String value1, String value2) {
            addCriterion("yao_ci_xiang_desc between", value1, value2, "yaoCiXiangDesc");
            return (Criteria) this;
        }

        public Criteria andYaoCiXiangDescNotBetween(String value1, String value2) {
            addCriterion("yao_ci_xiang_desc not between", value1, value2, "yaoCiXiangDesc");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}