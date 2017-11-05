package com.bao.springboot.pojo;

import java.util.ArrayList;
import java.util.List;

public class TGuaExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public TGuaExample() {
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

        public Criteria andCodeIsNull() {
            addCriterion("code is null");
            return (Criteria) this;
        }

        public Criteria andCodeIsNotNull() {
            addCriterion("code is not null");
            return (Criteria) this;
        }

        public Criteria andCodeEqualTo(Integer value) {
            addCriterion("code =", value, "code");
            return (Criteria) this;
        }

        public Criteria andCodeNotEqualTo(Integer value) {
            addCriterion("code <>", value, "code");
            return (Criteria) this;
        }

        public Criteria andCodeGreaterThan(Integer value) {
            addCriterion("code >", value, "code");
            return (Criteria) this;
        }

        public Criteria andCodeGreaterThanOrEqualTo(Integer value) {
            addCriterion("code >=", value, "code");
            return (Criteria) this;
        }

        public Criteria andCodeLessThan(Integer value) {
            addCriterion("code <", value, "code");
            return (Criteria) this;
        }

        public Criteria andCodeLessThanOrEqualTo(Integer value) {
            addCriterion("code <=", value, "code");
            return (Criteria) this;
        }

        public Criteria andCodeIn(List<Integer> values) {
            addCriterion("code in", values, "code");
            return (Criteria) this;
        }

        public Criteria andCodeNotIn(List<Integer> values) {
            addCriterion("code not in", values, "code");
            return (Criteria) this;
        }

        public Criteria andCodeBetween(Integer value1, Integer value2) {
            addCriterion("code between", value1, value2, "code");
            return (Criteria) this;
        }

        public Criteria andCodeNotBetween(Integer value1, Integer value2) {
            addCriterion("code not between", value1, value2, "code");
            return (Criteria) this;
        }

        public Criteria andGuaCiIsNull() {
            addCriterion("gua_ci is null");
            return (Criteria) this;
        }

        public Criteria andGuaCiIsNotNull() {
            addCriterion("gua_ci is not null");
            return (Criteria) this;
        }

        public Criteria andGuaCiEqualTo(String value) {
            addCriterion("gua_ci =", value, "guaCi");
            return (Criteria) this;
        }

        public Criteria andGuaCiNotEqualTo(String value) {
            addCriterion("gua_ci <>", value, "guaCi");
            return (Criteria) this;
        }

        public Criteria andGuaCiGreaterThan(String value) {
            addCriterion("gua_ci >", value, "guaCi");
            return (Criteria) this;
        }

        public Criteria andGuaCiGreaterThanOrEqualTo(String value) {
            addCriterion("gua_ci >=", value, "guaCi");
            return (Criteria) this;
        }

        public Criteria andGuaCiLessThan(String value) {
            addCriterion("gua_ci <", value, "guaCi");
            return (Criteria) this;
        }

        public Criteria andGuaCiLessThanOrEqualTo(String value) {
            addCriterion("gua_ci <=", value, "guaCi");
            return (Criteria) this;
        }

        public Criteria andGuaCiLike(String value) {
            addCriterion("gua_ci like", value, "guaCi");
            return (Criteria) this;
        }

        public Criteria andGuaCiNotLike(String value) {
            addCriterion("gua_ci not like", value, "guaCi");
            return (Criteria) this;
        }

        public Criteria andGuaCiIn(List<String> values) {
            addCriterion("gua_ci in", values, "guaCi");
            return (Criteria) this;
        }

        public Criteria andGuaCiNotIn(List<String> values) {
            addCriterion("gua_ci not in", values, "guaCi");
            return (Criteria) this;
        }

        public Criteria andGuaCiBetween(String value1, String value2) {
            addCriterion("gua_ci between", value1, value2, "guaCi");
            return (Criteria) this;
        }

        public Criteria andGuaCiNotBetween(String value1, String value2) {
            addCriterion("gua_ci not between", value1, value2, "guaCi");
            return (Criteria) this;
        }

        public Criteria andGuaNameIsNull() {
            addCriterion("gua_name is null");
            return (Criteria) this;
        }

        public Criteria andGuaNameIsNotNull() {
            addCriterion("gua_name is not null");
            return (Criteria) this;
        }

        public Criteria andGuaNameEqualTo(String value) {
            addCriterion("gua_name =", value, "guaName");
            return (Criteria) this;
        }

        public Criteria andGuaNameNotEqualTo(String value) {
            addCriterion("gua_name <>", value, "guaName");
            return (Criteria) this;
        }

        public Criteria andGuaNameGreaterThan(String value) {
            addCriterion("gua_name >", value, "guaName");
            return (Criteria) this;
        }

        public Criteria andGuaNameGreaterThanOrEqualTo(String value) {
            addCriterion("gua_name >=", value, "guaName");
            return (Criteria) this;
        }

        public Criteria andGuaNameLessThan(String value) {
            addCriterion("gua_name <", value, "guaName");
            return (Criteria) this;
        }

        public Criteria andGuaNameLessThanOrEqualTo(String value) {
            addCriterion("gua_name <=", value, "guaName");
            return (Criteria) this;
        }

        public Criteria andGuaNameLike(String value) {
            addCriterion("gua_name like", value, "guaName");
            return (Criteria) this;
        }

        public Criteria andGuaNameNotLike(String value) {
            addCriterion("gua_name not like", value, "guaName");
            return (Criteria) this;
        }

        public Criteria andGuaNameIn(List<String> values) {
            addCriterion("gua_name in", values, "guaName");
            return (Criteria) this;
        }

        public Criteria andGuaNameNotIn(List<String> values) {
            addCriterion("gua_name not in", values, "guaName");
            return (Criteria) this;
        }

        public Criteria andGuaNameBetween(String value1, String value2) {
            addCriterion("gua_name between", value1, value2, "guaName");
            return (Criteria) this;
        }

        public Criteria andGuaNameNotBetween(String value1, String value2) {
            addCriterion("gua_name not between", value1, value2, "guaName");
            return (Criteria) this;
        }

        public Criteria andGuaModelIsNull() {
            addCriterion("gua_model is null");
            return (Criteria) this;
        }

        public Criteria andGuaModelIsNotNull() {
            addCriterion("gua_model is not null");
            return (Criteria) this;
        }

        public Criteria andGuaModelEqualTo(String value) {
            addCriterion("gua_model =", value, "guaModel");
            return (Criteria) this;
        }

        public Criteria andGuaModelNotEqualTo(String value) {
            addCriterion("gua_model <>", value, "guaModel");
            return (Criteria) this;
        }

        public Criteria andGuaModelGreaterThan(String value) {
            addCriterion("gua_model >", value, "guaModel");
            return (Criteria) this;
        }

        public Criteria andGuaModelGreaterThanOrEqualTo(String value) {
            addCriterion("gua_model >=", value, "guaModel");
            return (Criteria) this;
        }

        public Criteria andGuaModelLessThan(String value) {
            addCriterion("gua_model <", value, "guaModel");
            return (Criteria) this;
        }

        public Criteria andGuaModelLessThanOrEqualTo(String value) {
            addCriterion("gua_model <=", value, "guaModel");
            return (Criteria) this;
        }

        public Criteria andGuaModelLike(String value) {
            addCriterion("gua_model like", value, "guaModel");
            return (Criteria) this;
        }

        public Criteria andGuaModelNotLike(String value) {
            addCriterion("gua_model not like", value, "guaModel");
            return (Criteria) this;
        }

        public Criteria andGuaModelIn(List<String> values) {
            addCriterion("gua_model in", values, "guaModel");
            return (Criteria) this;
        }

        public Criteria andGuaModelNotIn(List<String> values) {
            addCriterion("gua_model not in", values, "guaModel");
            return (Criteria) this;
        }

        public Criteria andGuaModelBetween(String value1, String value2) {
            addCriterion("gua_model between", value1, value2, "guaModel");
            return (Criteria) this;
        }

        public Criteria andGuaModelNotBetween(String value1, String value2) {
            addCriterion("gua_model not between", value1, value2, "guaModel");
            return (Criteria) this;
        }

        public Criteria andGuaCiDescIsNull() {
            addCriterion("gua_ci_desc is null");
            return (Criteria) this;
        }

        public Criteria andGuaCiDescIsNotNull() {
            addCriterion("gua_ci_desc is not null");
            return (Criteria) this;
        }

        public Criteria andGuaCiDescEqualTo(String value) {
            addCriterion("gua_ci_desc =", value, "guaCiDesc");
            return (Criteria) this;
        }

        public Criteria andGuaCiDescNotEqualTo(String value) {
            addCriterion("gua_ci_desc <>", value, "guaCiDesc");
            return (Criteria) this;
        }

        public Criteria andGuaCiDescGreaterThan(String value) {
            addCriterion("gua_ci_desc >", value, "guaCiDesc");
            return (Criteria) this;
        }

        public Criteria andGuaCiDescGreaterThanOrEqualTo(String value) {
            addCriterion("gua_ci_desc >=", value, "guaCiDesc");
            return (Criteria) this;
        }

        public Criteria andGuaCiDescLessThan(String value) {
            addCriterion("gua_ci_desc <", value, "guaCiDesc");
            return (Criteria) this;
        }

        public Criteria andGuaCiDescLessThanOrEqualTo(String value) {
            addCriterion("gua_ci_desc <=", value, "guaCiDesc");
            return (Criteria) this;
        }

        public Criteria andGuaCiDescLike(String value) {
            addCriterion("gua_ci_desc like", value, "guaCiDesc");
            return (Criteria) this;
        }

        public Criteria andGuaCiDescNotLike(String value) {
            addCriterion("gua_ci_desc not like", value, "guaCiDesc");
            return (Criteria) this;
        }

        public Criteria andGuaCiDescIn(List<String> values) {
            addCriterion("gua_ci_desc in", values, "guaCiDesc");
            return (Criteria) this;
        }

        public Criteria andGuaCiDescNotIn(List<String> values) {
            addCriterion("gua_ci_desc not in", values, "guaCiDesc");
            return (Criteria) this;
        }

        public Criteria andGuaCiDescBetween(String value1, String value2) {
            addCriterion("gua_ci_desc between", value1, value2, "guaCiDesc");
            return (Criteria) this;
        }

        public Criteria andGuaCiDescNotBetween(String value1, String value2) {
            addCriterion("gua_ci_desc not between", value1, value2, "guaCiDesc");
            return (Criteria) this;
        }

        public Criteria andGuaCiXiangIsNull() {
            addCriterion("gua_ci_xiang is null");
            return (Criteria) this;
        }

        public Criteria andGuaCiXiangIsNotNull() {
            addCriterion("gua_ci_xiang is not null");
            return (Criteria) this;
        }

        public Criteria andGuaCiXiangEqualTo(String value) {
            addCriterion("gua_ci_xiang =", value, "guaCiXiang");
            return (Criteria) this;
        }

        public Criteria andGuaCiXiangNotEqualTo(String value) {
            addCriterion("gua_ci_xiang <>", value, "guaCiXiang");
            return (Criteria) this;
        }

        public Criteria andGuaCiXiangGreaterThan(String value) {
            addCriterion("gua_ci_xiang >", value, "guaCiXiang");
            return (Criteria) this;
        }

        public Criteria andGuaCiXiangGreaterThanOrEqualTo(String value) {
            addCriterion("gua_ci_xiang >=", value, "guaCiXiang");
            return (Criteria) this;
        }

        public Criteria andGuaCiXiangLessThan(String value) {
            addCriterion("gua_ci_xiang <", value, "guaCiXiang");
            return (Criteria) this;
        }

        public Criteria andGuaCiXiangLessThanOrEqualTo(String value) {
            addCriterion("gua_ci_xiang <=", value, "guaCiXiang");
            return (Criteria) this;
        }

        public Criteria andGuaCiXiangLike(String value) {
            addCriterion("gua_ci_xiang like", value, "guaCiXiang");
            return (Criteria) this;
        }

        public Criteria andGuaCiXiangNotLike(String value) {
            addCriterion("gua_ci_xiang not like", value, "guaCiXiang");
            return (Criteria) this;
        }

        public Criteria andGuaCiXiangIn(List<String> values) {
            addCriterion("gua_ci_xiang in", values, "guaCiXiang");
            return (Criteria) this;
        }

        public Criteria andGuaCiXiangNotIn(List<String> values) {
            addCriterion("gua_ci_xiang not in", values, "guaCiXiang");
            return (Criteria) this;
        }

        public Criteria andGuaCiXiangBetween(String value1, String value2) {
            addCriterion("gua_ci_xiang between", value1, value2, "guaCiXiang");
            return (Criteria) this;
        }

        public Criteria andGuaCiXiangNotBetween(String value1, String value2) {
            addCriterion("gua_ci_xiang not between", value1, value2, "guaCiXiang");
            return (Criteria) this;
        }

        public Criteria andGuaCiXiangDescIsNull() {
            addCriterion("gua_ci_xiang_desc is null");
            return (Criteria) this;
        }

        public Criteria andGuaCiXiangDescIsNotNull() {
            addCriterion("gua_ci_xiang_desc is not null");
            return (Criteria) this;
        }

        public Criteria andGuaCiXiangDescEqualTo(String value) {
            addCriterion("gua_ci_xiang_desc =", value, "guaCiXiangDesc");
            return (Criteria) this;
        }

        public Criteria andGuaCiXiangDescNotEqualTo(String value) {
            addCriterion("gua_ci_xiang_desc <>", value, "guaCiXiangDesc");
            return (Criteria) this;
        }

        public Criteria andGuaCiXiangDescGreaterThan(String value) {
            addCriterion("gua_ci_xiang_desc >", value, "guaCiXiangDesc");
            return (Criteria) this;
        }

        public Criteria andGuaCiXiangDescGreaterThanOrEqualTo(String value) {
            addCriterion("gua_ci_xiang_desc >=", value, "guaCiXiangDesc");
            return (Criteria) this;
        }

        public Criteria andGuaCiXiangDescLessThan(String value) {
            addCriterion("gua_ci_xiang_desc <", value, "guaCiXiangDesc");
            return (Criteria) this;
        }

        public Criteria andGuaCiXiangDescLessThanOrEqualTo(String value) {
            addCriterion("gua_ci_xiang_desc <=", value, "guaCiXiangDesc");
            return (Criteria) this;
        }

        public Criteria andGuaCiXiangDescLike(String value) {
            addCriterion("gua_ci_xiang_desc like", value, "guaCiXiangDesc");
            return (Criteria) this;
        }

        public Criteria andGuaCiXiangDescNotLike(String value) {
            addCriterion("gua_ci_xiang_desc not like", value, "guaCiXiangDesc");
            return (Criteria) this;
        }

        public Criteria andGuaCiXiangDescIn(List<String> values) {
            addCriterion("gua_ci_xiang_desc in", values, "guaCiXiangDesc");
            return (Criteria) this;
        }

        public Criteria andGuaCiXiangDescNotIn(List<String> values) {
            addCriterion("gua_ci_xiang_desc not in", values, "guaCiXiangDesc");
            return (Criteria) this;
        }

        public Criteria andGuaCiXiangDescBetween(String value1, String value2) {
            addCriterion("gua_ci_xiang_desc between", value1, value2, "guaCiXiangDesc");
            return (Criteria) this;
        }

        public Criteria andGuaCiXiangDescNotBetween(String value1, String value2) {
            addCriterion("gua_ci_xiang_desc not between", value1, value2, "guaCiXiangDesc");
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