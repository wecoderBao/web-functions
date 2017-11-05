package com.bao.springboot.mapper;

import com.bao.springboot.pojo.TGua;
import com.bao.springboot.pojo.TGuaExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TGuaMapper {
    int countByExample(TGuaExample example);

    int deleteByExample(TGuaExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TGua record);

    int insertSelective(TGua record);

    List<TGua> selectByExample(TGuaExample example);

    TGua selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TGua record, @Param("example") TGuaExample example);

    int updateByExample(@Param("record") TGua record, @Param("example") TGuaExample example);

    int updateByPrimaryKeySelective(TGua record);

    int updateByPrimaryKey(TGua record);
}