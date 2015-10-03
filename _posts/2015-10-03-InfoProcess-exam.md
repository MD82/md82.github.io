---
layout: post
tags: new info language exam
date: 2015-10-03 22:51
thumbnail: http://placehold.it/100x100
title: 신기술언어
published: true
---

[키의 개념]
<ul>
<li>슈퍼키 : 한 릴레이션 내에 있는 속성들의 집합으로 구성된 키.유일성(Unique)은 만족하지만, 최소성(Minimality)은 비만족</li>
<li>후보키(Candidate Key) : 튜플을 유일하게 식별하기 위해 사용되는 속성들의 부분집합. 유일성과 최소성을 모두 만족</li>
<li>기본키 : 후보키중에서 특별히 선정된 키로 중복된 값 및 NULL을 가질수 없다. 후보키의 성질을 갖는다.</li>
<li>대체키(Alternate Key) : 후보키 중에서 선정된 기본키를 제외한 나머지 후보키를 의미함</li>
<li>외래키(Foreign Key) : <ul><li>기본키를 참조하는 속성 또는 속성들의 집합.</li><li>릴레이션 간의 관계를 표현할 때 사용.</li><li>동일한 도메인상에서 정의되었을 때의 속성</li><li>기본키와 동일한 키 속성</li></ul></li>
</ul>
[정규화]
<ol>
<li>제1정규형 : 모든 속성의 도메인이 원자값만으로 되어있는 정규형.</li>
<li>제2정규형 : 모든 속성이 기본키에 대하여 완전 함수적 종속을 만족하는 정규형.</li>
<li>제3정규형 : 모든 속성이 기본키에 대해 이행적 함수적 종속(Transitive Functional Dependency)을 만족하지 않는 정규형.<br>ex) A->B이고, B->C라면, A->C는 이행적 함수적 종속이 된다.</li>
<li>BCNF : 모든 결정자가 후보키(Candidate Key)인 정규형</li>
<li>제4정규형 : 다중값 종속(MVD:Multi Valued Dependency)이 존재할 경우, 모든 속성이 함수적 종속 관계를 만족하는 정규형</li>
<li>제5정규형 : 모든 조인 종속(JD:Join Dependency)이 후보키를 통해서만 성립되는 정규형.</li>
</ol>
[무결성]
<ul>
<li>무결성 : 현실세계와 DB의 데이터값과의 정확성</li>
<li>무결성 제약조건(Constraint) : 정확하지 않은 Data가 DB에 저장되는 것을 방지하기 위한 제약조건</li>
<br>
<li>NULL 무결성 : 속성값은 NULL이 될수 없다</li>
<li>Unique 무결성 : 속성값은 서로 달라야 한다</li>
<li>Domain 무결성 : 정의된 도메인에 속한 속성값이어야 한다</li>
<li>Key 무결성 : 하나의 relation에는 적어도 하나의 Key가 존재해야 한다</li>
<li>Relationship 무결성 : <ul><li>릴레이션 - 튜플의 삽입 가능 여부</li><li>한 릴레이션과 다른 릴레이션의 튜플들 사이의 관계에 대한 적절성 여부</li></ul></li>
<li>Referential 무결성 : Foreign Key 값은 NULL이거나 참조 릴레이션의 기본키값과 동일해야 한다</li>
<li>Entity 무결성 : 기본키를 구성하는 어떤 속성도 NULL일수 없다</li>
</ul>
[이상(Anomaly)의 종류]
<ul>
<li>삽입이상 : 원하지 않은 값들로 인해 삽입할 수 없게 되는 현상</li>
<li>삭제이상 : 상관없는 값들도 함께 연쇄 삭제가 발생하는 현상</li>
<li>갱신이상 : 일부 튜플의 정보만 갱신되어 정보에 불일치성(Inconsistency)이 생기는 현상</li>
</ul>
[용어정리]
<ul>
<li>N-Screen : N개의 서로 다른 단말기에서 동일한 콘텐츠를 자유롭게 이용할 수 있는 서비스</li>
<li>VDSL(Very high-data rate Digital Subscriber Line) : 초고속 디지털 가입자회선</li>
<li>cyber bullying : 인터넷상에서 특정인을 괴롭히는 행동 또는 그러한 현상</li>
</ul>
