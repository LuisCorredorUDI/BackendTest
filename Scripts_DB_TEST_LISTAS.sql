
--tablas

CREATE TABLE mensaje (
    id NUMBER(6) CONSTRAINT mensaje_pk PRIMARY KEY,
    nick VARCHAR2(50),
    mensaje VARCHAR2(250)
);


SELECT NVL(MAX(ID),0) FROM MENSAJE;


