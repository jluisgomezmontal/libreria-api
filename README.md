# Backend - API de Analíticas

![Node.js](https://img.shields.io/badge/Node.js-18-green)
![Express](https://img.shields.io/badge/Express-4.18-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen)
![License](https://img.shields.io/badge/License-MIT-yellow)

API de analíticas para trackeo de interacciones con componentes de frontend. Construida con **Node.js**, **Express**, **MongoDB** y autenticación **JWT**. Permite registrar interacciones, obtener estadísticas y exportarlas en CSV/JSON.

---

## Tabla de Contenidos

- [Endpoints](#endpoints)
  - [Autenticación](#autenticación)
  - [Tracking de Componentes](#tracking-de-componentes)
  - [Health Check](#health-check)
- [Modelo de Datos](#modelo-de-datos)
- [Requerimientos Técnicos](#requerimientos-técnicos)
- [Stack Tecnológico](#stack-tecnológico)
- [Instalación y Ejecución](#instalación-y-ejecución)
- [Ejemplos con curl](#ejemplos-con-curl)
- [Entregables](#entregables)
- [Licencia](#licencia)

---

## Endpoints

### 1. Autenticación

#### POST `/api/auth/register`

Registrar un nuevo usuario.

**Request Body:**

```json
{
  "name": "Mario Cardenas",
  "email": "mario.cardenas@t1paginas.com",
  "password": "tu_contraseña"
}
