package com.bao.springboot.mapper;

import com.bao.springboot.pojo.TYao;
import com.bao.springboot.pojo.TYaoExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TYaoMapper {
    int countByExample(TYaoExample example);

    int deleteByExample(TYaoExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TYao record);

    int insertSelective(TYao record);

    List<TYao> selectByExample(TYaoExample example);

    TYao selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TYao record, @Param("example") TYaoExample example);

    int updateByExample(@Param("record") TYao record, @Param("example") TYaoExample example);

    int updateByPrimaryKeySelective(TYao record);

    int updateByPrimaryKey(TYao record);
}