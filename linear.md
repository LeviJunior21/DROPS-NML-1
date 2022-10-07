---
title: Regra de Crammer
---

### O que é a Regra de Crammer?

A Regra de Crammer é uma das formas de achar os valores dos coeficeintes em um sistema linear usando determinantes.

### Como é utilizado?

Considere o sistema de equações a seguir:


---
title: "Untitled"
author: "you"
date: "19 Februar 2018"
output: html_document
---

```{r setup, include=FALSE}
knitr::opts_chunk$set(echo = TRUE)
```

```{r equation}
eq <-  noquote(paste(expression("2x+5y-2z+2p=9\\\\3x-2y+1z-3p=34\\\\-3x+3y+2z+4p=33\\\\2x+3y+4z+5p=125")))
```

$$
\begin{cases} `r eq` \end{cases}
$$
```{r equation}
eq <-  noquote(paste(expression("x+2y+3z=2\\\\2x+3y-1z=-2\\\\3x+2y+z=2")))
```
