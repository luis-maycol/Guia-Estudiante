import React, { useMemo, useState } from "react";
import "./index.css";

// DATASET DE LOS 6 TRÁMITES CON IMÁGENES EXACTAS DE LA VERSIÓN RESTAURADA
  const PROCEDURES_DATA = {
    'matricula': {
      id: 'matricula',
      cardTitle: 'MATRÍCULA',
      cardSubtitle: 'Ingresantes, Regulares y Otros',
      cardDuration: '3 días hábiles',
      cardArea: 'Secretaría Académica',
      cardBtnClass: 'bg-[#1E3A8A] hover:bg-[#172554] text-white',
      cardImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA23-gt058FgYmyFV3ZsgC1GtAQvD6nphMihHGpZJltmg0Wey50_CKBo-A4NAzVzr_h6KnAjm_T3muAeBETE0gO7gyJgIWnrtdYAt4oYAfvn7Y-udIh9rDYurspkb8ZQY_g7P6aLC--0mLJiPVG-0GmWKludrDTt2m5U9rzUzoHnu9Rg2CDwYBhfDE6MHVhpkMeixal2zox9A9UaK12BlczRTdIqRd2fpCSQHlDTgRD3cg0Z2UDR3PZ0A',
      category: 'Matrícula & Registro',
      code: 'TR-MAT-001',
      title: 'Matrícula Ordinaria e Ingresantes',
      typeBadge: 'Trámite Presencial / Virtual',
      description: 'Proceso formal de inscripción semestral para estudiantes ingresantes y regulares. Valida la carga académica, horarios asignados y la condición del estudiante en el Sistema Integrado de Información Académica.',
      cost: 'S/ 150.00',
      costDetail: 'Tasa fija institucional semestral',
      paymentMethod: 'Efectivo en Caja',
      paymentDetail: 'En caja institucional o Banco de la Nación',
      duration: '03 Días Hábiles',
      durationDetail: 'Sujeto a validación curricular',
      area: 'Secretaría Académica',
      areaDetail: 'Refrendado por Dirección General',
      location: 'Sede Central MAHP - Pabellón A, Primer Nivel',
      steps: [
        {
          num: 1,
          title: '1. Solicitud y FUT',
          sub: 'Registro de mesa de partes',
          phaseTag: 'FASE INICIAL: REGISTRO',
          phaseStep: 'Paso 01 de 05',
          estimatedTime: 'Inmediato (Día 1)',
          heading: 'Presentación de la Solicitud y Formularios',
          tasks: [
            'Formulario Único de Trámite (FUT) debidamente llenado con datos actuales y especialidad.',
            'Constancia de ingreso (para ingresantes) o constancia de matrícula anterior (regulares).',
            'Copia legible de DNI vigente (o Carné de Extranjería).',
            '02 Fotografías tamaño carné actuales a color en fondo blanco (no instantáneas).'
          ],
          primaryBtnText: 'Llenar Formato FUT en línea',
          alertNote: 'Si radicas fuera de Ayacucho, puedes presentar el trámite de manera virtual adjuntando los escaneados en formato PDF nítido a través del correo institucional.'
        },
        {
          num: 2,
          title: '2. Abono Oficial',
          sub: 'En caja institucional',
          phaseTag: 'FASE FINANCIERA: APORTE',
          phaseStep: 'Paso 02 de 05',
          estimatedTime: '15 Minutos (Día 1)',
          heading: 'Cancelación de Tasas Educativas y Validación',
          tasks: [
            'Efectuar el pago de matrícula de S/ 150.00 en la ventanilla de Tesorería del instituto.',
            'Canjear el comprobante de depósito en cuenta bancaria por la Boleta Institucional oficial.',
            'Verificar que el comprobante consigne los nombres completos y código del estudiante.'
          ],
          primaryBtnText: 'Generar Orden de Pago',
          alertNote: 'Conserva el voucher original foliado, se te solicitará en físico al momento de recoger la constancia de matrícula definitiva.'
        },
        {
          num: 3,
          title: '3. Validación Curricular',
          sub: 'Secretaría Académica',
          phaseTag: 'FASE TÉCNICA: CURRÍCULO',
          phaseStep: 'Paso 03 de 05',
          estimatedTime: '24 Horas (Día 2)',
          heading: 'Revisión de Pre-requisitos y Carga Horaria',
          tasks: [
            'Constatación de no adeudo documental ni sanciones disciplinarias vigentes.',
            'Verificación de asignaturas prerrequisito aprobadas en el semestre precedente.',
            'Elección de grupo formativo y turno pedagógico disponible.'
          ],
          primaryBtnText: 'Ver Malla Curricular',
          alertNote: 'Los estudiantes con asignaturas a cargo deberán solicitar previamente la autorización de nivelación según directiva vigente.'
        },
        {
          num: 4,
          title: '4. Refrendo y Firma',
          sub: 'Firma y código QR',
          phaseTag: 'FASE REGISTRAL: ACTAS',
          phaseStep: 'Paso 04 de 05',
          estimatedTime: '24 Horas (Día 3)',
          heading: 'Ingreso al Sistema Oficial MINEDU / SIA-MAHP',
          tasks: [
            'Generación del acta de matrícula electrónica y código correlativo anual.',
            'Firma digital de la jefatura de Secretaría Académica.',
            'Asignación de credenciales para el aula virtual institucional Moodle.'
          ],
          primaryBtnText: 'Consultar Estatus en Sistema',
          alertNote: 'Se genera un código QR de verificación de autenticidad respaldado por el IDEX Institucional.'
        },
        {
          num: 5,
          title: '5. Entrega de Ficha',
          sub: 'Ficha oficial de matrícula',
          phaseTag: 'FASE FINAL: ENTREGA',
          phaseStep: 'Paso 05 de 05',
          estimatedTime: 'Culminación (Día 3)',
          heading: 'Emisión y Entrega de la Ficha de Matrícula',
          tasks: [
            'Recepción de la Ficha Oficial de Matrícula visada y sellada.',
            'Activación del carné de biblioteca y acceso a laboratorios de cómputo.',
            'Recepción del cronograma académico semestral 2026.'
          ],
          primaryBtnText: 'Descargar Ficha en PDF',
          alertNote: '¡Trámite completado! Guarda tu ficha en digital para cualquier gestión ante el seguro estudiantil o medio pasaje universitario.'
        }
      ]
    },

    'traslados': {
      id: 'traslados',
      cardTitle: 'TRASLADOS',
      cardSubtitle: 'Internos, Externos y Convalidación',
      cardDuration: '5 días hábiles',
      cardArea: 'Secretaría Académica',
      cardBtnClass: 'bg-[#991B1B] hover:bg-[#7f1d1d] text-white',
      cardImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcyVP3Uxn24giKZZ6jyq-aBbtuW30Z2-M5a36CkPnGGf-OCFNB4GjBW0e0j2kPpWoOqMYM71DCnNBVUYvpx8MQdyiWcZGS5zfwxHNEJwwprr3MazP5-ALRjdzVeVUwO5LimBuwL8PcDTpe2aUuiRC6PEkeeQZCSasEbN1An6C37XYaQzqiyDKAQf4YBh5oKy-I3ftzcCnt-jio4tqd5dxSF757UoWfzxcpJLGsrkL_x5jfJZu_OxHdjA',
      category: 'Traslados & Convalidación',
      code: 'TR-TRAS-002',
      title: 'Traslado Interno, Externo y Convalidación',
      typeBadge: 'Trámite Presencial',
      description: 'Procedimiento regulado para el cambio de programa de estudios dentro de la institución o traslado proveniente de otros institutos pedagógicos o tecnológicos con convalidación oficial de unidades de competencia.',
      cost: 'S/ 150.00',
      costDetail: 'Derecho de convalidación y expediente',
      paymentMethod: 'Caja Central / Banco',
      paymentDetail: 'Boleta de venta institucional sellada',
      duration: '05 Días Hábiles',
      durationDetail: 'Comisión evaluadora técnica',
      area: 'Unidad Académica',
      areaDetail: 'Comisión de Convalidación Docente',
      location: 'Sede Central MAHP - Pabellón B, Segundo Piso',
      steps: [
        {
          num: 1,
          title: '1. Solicitud de Vacante',
          sub: 'Mesa de partes MAHP',
          phaseTag: 'FASE INICIAL: REGISTRO',
          phaseStep: 'Paso 01 de 05',
          estimatedTime: 'Día 1',
          heading: 'Presentación del Formato Único y Requisitos',
          tasks: [
            'FUT consignando la especialidad pedagógica de origen y la de destino.',
            'Certificados oficiales de estudios visados por la DRE de origen.',
            'Copia de DNI y constancia de no haber sido separado por medida disciplinaria.'
          ],
          primaryBtnText: 'Llenar Formato FUT en línea',
          alertNote: 'Los traslados proceden únicamente dentro del cronograma publicado al inicio de cada semestre lectivo.'
        },
        {
          num: 2,
          title: '2. Abono por Convalidación',
          sub: 'Caja del Instituto',
          phaseTag: 'FASE FINANCIERA',
          phaseStep: 'Paso 02 de 05',
          estimatedTime: 'Día 1 - 2',
          heading: 'Pago de Tasas de Evaluación Curricular',
          tasks: [
            'Pago por derecho de traslado y convalidación de asignaturas (S/ 150.00).',
            'Adjuntar el recibo al legajo de traslado en Secretaría.'
          ],
          primaryBtnText: 'Descargar Formato de Pago',
          alertNote: 'El pago no garantiza la convalidación total, la cual dependerá del dictamen técnico emitido.'
        },
        {
          num: 3,
          title: '3. Dictamen Docente',
          sub: 'Comisión de Área',
          phaseTag: 'FASE TÉCNICA EVALUATIVA',
          phaseStep: 'Paso 03 de 05',
          estimatedTime: 'Día 3 - 4',
          heading: 'Análisis Comparativo de Sílabos y Créditos',
          tasks: [
            'Revisión de sílabos sellados y autenticados de la institución de procedencia.',
            'Verificación de al menos 75% de coincidencia temática por unidad didáctica.',
            'Emisión del Informe Técnico de Equivalencias.'
          ],
          primaryBtnText: 'Consultar Tabla de Equivalencias',
          alertNote: 'Se requiere calificación aprobatoria mínima de 11 (once) en escala vigesimal.'
        },
        {
          num: 4,
          title: '4. Resolución Directoral',
          sub: 'Firma de Dirección',
          phaseTag: 'FASE RESOLUTIVA',
          phaseStep: 'Paso 04 de 05',
          estimatedTime: 'Día 5',
          heading: 'Aprobación mediante Acto Resolutivo',
          tasks: [
            'Elaboración del proyecto de Resolución Directoral de Aprobación de Traslado.',
            'Visación y firma por la Dirección General del IESP MAHP.',
            'Asentamiento de notas convalidadas en el libro de actas especial.'
          ],
          primaryBtnText: 'Verificar Resolución Digital',
          alertNote: 'La resolución confiere pleno derecho para la matrícula en el semestre correspondiente.'
        },
        {
          num: 5,
          title: '5. Matrícula y Notificación',
          sub: 'Entrega final',
          phaseTag: 'FASE FINAL: INCORPORACIÓN',
          phaseStep: 'Paso 05 de 05',
          estimatedTime: 'Día 5',
          heading: 'Entrega de Resolución e Inscripción Final',
          tasks: [
            'Recojo de copia autenticada de la Resolución Directoral.',
            'Matrícula regular en el programa pedagógico de destino.',
            'Registro en el padrón de alumnos de la DREA Ayacucho.'
          ],
          primaryBtnText: 'Descargar Constancia de Traslado',
          alertNote: 'El alumno queda plenamente integrado a su nueva especialidad académica.'
        }
      ]
    },

    'constancias': {
      id: 'constancias',
      cardTitle: 'CONSTANCIAS',
      cardSubtitle: 'Estudios, Egresado y No Adeudo',
      cardDuration: '2 días hábiles',
      cardArea: 'Mesa de Partes',
      cardBtnClass: 'bg-[#D97706] hover:bg-[#b45309] text-white',
      cardImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnuI63L_nKoWe6g8K_yZG6VbKSi-g3q_lJejSZrXubest3PUePblLKmC6eqMuKYtnxe9ozK9WKPdw_goX1x9lX52OyvfCXp8G2UL37xNFrlz2ZEGexLvmChAZYfjZAsqFClbTdhEuS_MIyetic0ufgYL9SbPKs29rcDcp6mpE44QBmpz2iCgFbK7WtbWjrAXGGKUI2YV3IommwKWB_-qVqo-umwE1NxB9gXKqQN9CV-oEnYGf9e7C5_w',
      category: 'Constancias & Acreditaciones',
      code: 'TR-CONST-003',
      title: 'Constancias Institucionales (Estudios, Egreso, No Adeudo)',
      typeBadge: 'Trámite Virtual / Presencial',
      description: 'Emisión de documentos oficiales que certifican la condición académica del estudiante o egresado para fines laborales, postulación a becas (PRONABEC), subsidios familiares o trámites ante el MINEDU.',
      cost: 'S/ 10.00 - S/ 15.00',
      costDetail: 'Según modalidad de constancia solicitada',
      paymentMethod: 'Caja Institucional',
      paymentDetail: 'Ventanilla presencial o transferencia autorizada',
      duration: '02 Días Hábiles',
      durationDetail: 'Entrega inmediata si no registra observaciones',
      area: 'Mesa de Partes',
      areaDetail: 'Secretaría de Registros Académicos',
      location: 'Sede Central MAHP - Ventanilla de Trámite Documentario',
      steps: [
        {
          num: 1,
          title: '1. Solicitud y FUT',
          sub: 'Mesa de partes virtual/física',
          phaseTag: 'FASE INICIAL: SOLICITUD',
          phaseStep: 'Paso 01 de 05',
          estimatedTime: 'Inmediato (Día 1)',
          heading: 'Ingreso del Formulario y Selección del Documento',
          tasks: [
            'Completar el Formulario Único de Trámite (FUT) especificando el tipo de constancia requerida.',
            'Indicar la institución receptora o el motivo de la solicitud (Pronabec, EsSalud, trabajo).',
            'Consignar número de celular y correo institucional activo.'
          ],
          primaryBtnText: 'Llenar Formato FUT en línea',
          alertNote: 'Verifique que su nombre y DNI coincidan exactamente con su documento de identidad oficial.'
        },
        {
          num: 2,
          title: '2. Pago de la Tasa',
          sub: 'Caja del instituto',
          phaseTag: 'FASE DE RECAUDACIÓN',
          phaseStep: 'Paso 02 de 05',
          estimatedTime: '10 Minutos',
          heading: 'Abono según TUPA Institucional',
          tasks: [
            'Constancia de Matrícula o Estudios: S/ 10.00.',
            'Constancia de Egreso o Tercio Superior: S/ 15.00.',
            'Constancia de Buena Conducta o No Adeudo: S/ 10.00.'
          ],
          primaryBtnText: 'Descargar Recibo Digital',
          alertNote: 'Presentar el ticket de tesorería o comprobante bancario para adjuntar al expediente.'
        },
        {
          num: 3,
          title: '3. Verificación de Actas',
          sub: 'Archivo académico',
          phaseTag: 'FASE DE VALIDACIÓN',
          phaseStep: 'Paso 03 de 05',
          estimatedTime: '24 Horas (Día 1 - 2)',
          heading: 'Cotejo en la Base de Datos Académica',
          tasks: [
            'Secretaría verifica la matrícula vigente o la culminación del plan de estudios.',
            'Verificación de biblioteca: no registrar préstamos de libros pendientes.',
            'Verificación de laboratorios y caja.'
          ],
          primaryBtnText: 'Consultar Estado de Deuda',
          alertNote: 'En caso de registrar adeudo en biblioteca, el trámite se suspenderá hasta su regularización.'
        },
        {
          num: 4,
          title: '4. Firma y Sello Digital',
          sub: 'Secretario Académico',
          phaseTag: 'FASE DE EXPEDICIÓN',
          phaseStep: 'Paso 04 de 05',
          estimatedTime: 'Día 2',
          heading: 'Emisión del Documento con Código QR',
          tasks: [
            'Redacción del texto formal bajo estándar MINEDU.',
            'Incorporación del código QR único de verificación criptográfica.',
            'Visación por el Secretario Académico y sello institucional.'
          ],
          primaryBtnText: 'Validar QR Institucional',
          alertNote: 'La firma digital cuenta con plena validez legal conforme a la Ley N° 27269.'
        },
        {
          num: 5,
          title: '5. Entrega y Descarga',
          sub: 'PDF o formato físico',
          phaseTag: 'FASE FINAL: ENTREGA',
          phaseStep: 'Paso 05 de 05',
          estimatedTime: 'Día 2',
          heading: 'Notificación y Recepción del Certificado',
          tasks: [
            'Recepción del documento en formato PDF descargable en el buzón del estudiante.',
            'Opción de recojo presencial impreso en papel membretado en mesa de partes.'
          ],
          primaryBtnText: 'Descargar Constancia Oficial',
          alertNote: 'La constancia tiene vigencia oficial de tres (03) meses a partir de la fecha de emisión.'
        }
      ]
    },

    'certificados': {
      id: 'certificados',
      cardTitle: 'CERTIFICADOS',
      cardSubtitle: 'Módulos, Notas y Récord Académico',
      cardDuration: '5 días hábiles',
      cardArea: 'Secretaría Académica',
      cardBtnClass: 'bg-[#1E3A8A] hover:bg-[#172554] text-white',
      cardImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvHx6Etb0AJoHwgnQOg45-Ayi56QLkItuhj-_G_jk7GbQ3TvZ1w40ER9a2JKPEwSOF2CD75lG_qQwdsggbVZsYAgTO-X1g57iuB98cbEGP2XPb8LiKCFB2cCzPOakuHeSoCbYy-oCHxU5-Ho8zMlEHkQJWOYzxxliq87sK6PUMOdemPVM6ERNzo3CqwKtnmVWRhIxg4-EHNEwYEs4kdSd5cIDdJizXarvXLMCTrNhLkDl69QVlO-o5JA',
      category: 'Certificados',
      code: 'TR-ACAD-004',
      title: 'Certificado de Estudios Oficial',
      typeBadge: 'Trámite Presencial',
      description: 'Documento oficial que acredita las calificaciones obtenidas en las unidades didácticas del programa de estudios hasta el periodo concluido. El arancel institucional se abona por cada periodo académico regular concluido.',
      cost: 'S/ 120.00',
      costDetail: '2.182 % de la UIT vigente',
      paymentMethod: 'Efectivo Presencial',
      paymentDetail: 'En caja de la institución',
      duration: '03 Días Hábiles',
      durationDetail: 'Sujeto a verificación de actas',
      area: 'Secretaría Académica',
      areaDetail: 'Refrendado por Dirección',
      location: 'Sede Central MAHP - Pabellón A, Primer Nivel',
      steps: [
        {
          num: 1,
          title: '1. Solicitud y FUT',
          sub: 'Registro de mesa de partes',
          phaseTag: 'FASE INICIAL: REGISTRO',
          phaseStep: 'Paso 01 de 05',
          estimatedTime: 'Inmediato (Día 1)',
          heading: 'Presentación de la Solicitud y Formularios',
          tasks: [
            'Formulario Único de Trámite (FUT) debidamente llenado con tus datos actuales y especialidad.',
            'Copia legible de DNI vigente (o Carné de Extranjería).',
            '02 Fotografías tamaño carné actuales a color en fondo blanco (no instantáneas).'
          ],
          primaryBtnText: 'Llenar Formato FUT en línea',
          alertNote: 'Si radicas fuera de Ayacucho, puedes presentar el trámite de manera digital adjuntando los escaneados en formato PDF nítido a través del correo institucional.'
        },
        {
          num: 2,
          title: '2. Abono oficial de S/ 120',
          sub: 'En caja institucional',
          phaseTag: 'FASE FINANCIERA: APORTE',
          phaseStep: 'Paso 02 de 05',
          estimatedTime: '15 Minutos (Día 1)',
          heading: 'Abono en Caja y Canje de Comprobante',
          tasks: [
            'Pago por cada ciclo académico a certificar según TUPA oficial vigente.',
            'Canje de comprobante bancario por recibo oficial en Tesorería.',
            'Sellado de comprobante adjunto al FUT.'
          ],
          primaryBtnText: 'Descargar Formato de Recibo',
          alertNote: 'El pago debe realizarse únicamente en la cuenta bancaria autorizada o caja física de la sede central.'
        },
        {
          num: 3,
          title: '3. Actas y constancia no-adeudo',
          sub: 'Secretaría y Biblioteca',
          phaseTag: 'FASE REGISTRAL: VERIFICACIÓN',
          phaseStep: 'Paso 03 de 05',
          estimatedTime: 'Día 2',
          heading: 'Revisión y Vaciado de Notas Oficiales',
          tasks: [
            'Ubicación del libro de actas promocionales original en el archivo central.',
            'Transcripción exacta de notas, créditos y periodos académicos.',
            'Visación de no adeudo con biblioteca y laboratorios.'
          ],
          primaryBtnText: 'Ver Estado en Archivo',
          alertNote: 'Cualquier discrepancia de nombres con el acta de nacimiento debe ser subsanada previamente.'
        },
        {
          num: 4,
          title: '4. Refrendo de Dirección',
          sub: 'Firma y código QR',
          phaseTag: 'FASE FORMAL: FIRMA',
          phaseStep: 'Paso 04 de 05',
          estimatedTime: 'Día 2 - 3',
          heading: 'Firma Directoral y Sellos de Seguridad',
          tasks: [
            'Impresión en papel valorado oficial con código de seguridad.',
            'Firma manuscrita del Director General y del Secretario Académico.',
            'Pegado de fotografía con sello en relieve institucional.'
          ],
          primaryBtnText: 'Consultar Folio Asignado',
          alertNote: 'El documento cuenta con sello seco institucional que previene adulteraciones.'
        },
        {
          num: 5,
          title: '5. Entrega Oficial',
          sub: 'Recojo físico o digital',
          phaseTag: 'FASE FINAL: ENTREGA',
          phaseStep: 'Paso 05 de 05',
          estimatedTime: 'Día 3',
          heading: 'Entrega del Certificado Oficial al Titular',
          tasks: [
            'Firma del libro de registro y entrega de certificados en secretaría.',
            'Entrega del folder con el certificado oficial visado.',
            'Generación opcional de duplicado digital con código de validación MINEDU.'
          ],
          primaryBtnText: 'Agendar Recojo Presencial',
          alertNote: 'Para recojo por apoderado se requiere carta poder legalizada notarialmente y DNI del titular.'
        }
      ]
    },

    'titulacion': {
      id: 'titulacion',
      cardTitle: 'TITULACIÓN',
      cardSubtitle: 'Título Profesional Técnico y Duplicados',
      cardDuration: '15 días hábiles',
      cardArea: 'Unidad de Grados',
      cardBtnClass: 'bg-[#991B1B] hover:bg-[#7f1d1d] text-white',
      cardImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmhDQeQKzWtskB9fQbBx-l0hECO298W3KR4Ub6-zLT4BgzYrgQKAk7dfvn5eUwYphCaxF21pZb5deBtALSQztLPXiiJhI2TJLdCbmk2VppttokDfCKELrq5IZsjmapmCugGiT1oE257oPADB3yayYrheCVsM33j45nUWs_Dg5FV6wqJ59X0NYcTr6zHGYg1Fll8zw3rdMMxO_2-BJp6X275by4AEaXbLbcjOewPTtSUqQHqiLpv3H6rA',
      category: 'Grados & Títulos',
      code: 'TR-TIT-005',
      title: 'Titulación Profesional Pedagógica a Nombre de la Nación',
      typeBadge: 'Trámite Académico Formal',
      description: 'Procedimiento institucional para la obtención del Título Profesional a Nombre de la Nación, posterior a la sustentación aprobatoria de tesis de investigación aplicada o examen de suficiencia profesional, con inscripción en el MINEDU.',
      cost: 'S/ 1,550.00',
      costDetail: 'Tasa integral (jurado, asesoría, trámite y título)',
      paymentMethod: 'Banco de la Nación / Caja',
      paymentDetail: 'Posibilidad de pago fraccionado en 2 partes',
      duration: '15 Días Hábiles',
      durationDetail: 'Posterior al acto de sustentación',
      area: 'Unidad de Grados',
      areaDetail: 'Comisión de Grados y Títulos MAHP',
      location: 'Sede Central MAHP - Pabellón de Postgrado y Dirección',
      steps: [
        {
          num: 1,
          title: '1. Expediente de Egresado',
          sub: 'Revisión de requisitos',
          phaseTag: 'FASE PREVIA: REQUISITOS',
          phaseStep: 'Paso 01 de 05',
          estimatedTime: 'Día 1 - 3',
          heading: 'Conformación del Legajo de Titulación',
          tasks: [
            'Certificados oficiales de estudios completos (10 semestres) visados.',
            'Constancia de egresado y constancia de prácticas preprofesionales concluidas.',
            'Certificado de suficiencia de idioma extranjero (inglés nivel A2).',
            'Certificado oficial de dominio de lengua materna Quechua Chanka (según carrera).'
          ],
          primaryBtnText: 'Llenar Formato FUT en línea',
          alertNote: 'No debe tener deudas pendientes por ningún concepto académico ni administrativo.'
        },
        {
          num: 2,
          title: '2. Pago de Derechos',
          sub: 'Banco o Tesorería',
          phaseTag: 'FASE FINANCIERA',
          phaseStep: 'Paso 02 de 05',
          estimatedTime: 'Día 4',
          heading: 'Abono de Derechos de Tesis y Titulación',
          tasks: [
            'Abono total o primera cuota (50%) en la cuenta institucional de titulación.',
            'Canje en Tesorería por recibo oficial de titulación.',
            'Emisión de orden de designación de jurado calificador.'
          ],
          primaryBtnText: 'Descargar Orden de Pago',
          alertNote: 'Conserve el comprobante visado; es requisito para programar la fecha de sustentación.'
        },
        {
          num: 3,
          title: '3. Dictamen de Asesoría',
          sub: 'Comisión de investigación',
          phaseTag: 'FASE ACADÉMICA',
          phaseStep: 'Paso 03 de 05',
          estimatedTime: 'Día 5 - 8',
          heading: 'Evaluación de Tesis y Reporte Antiplagio',
          tasks: [
            'Entrega de 3 ejemplares anillados de la tesis o proyecto de innovación.',
            'Reporte del software de originalidad (Turnitin) con similitud menor al 20%.',
            'Informe favorable y visto bueno del docente asesor pedagógico.'
          ],
          primaryBtnText: 'Ver Reglamento de Tesis',
          alertNote: 'El informe antiplagio debe llevar la firma original del docente responsable del área de investigación.'
        },
        {
          num: 4,
          title: '4. Acto de Sustentación',
          sub: 'Jurado calificador',
          phaseTag: 'FASE EVALUATIVA: JURADO',
          phaseStep: 'Paso 04 de 05',
          estimatedTime: 'Día 9 - 11',
          heading: 'Defensa Pública y Firma de Actas',
          tasks: [
            'Exposición presencial de 45 minutos ante los tres miembros del jurado.',
            'Ronda de preguntas y deliberación a puerta cerrada.',
            'Firma del Acta de Sustentación con calificación obtenida.'
          ],
          primaryBtnText: 'Consultar Rol de Sustentaciones',
          alertNote: 'El resultado puede ser: Aprobado por Unanimidad, por Mayoría o Desaprobado.'
        },
        {
          num: 5,
          title: '5. Diploma y Registro',
          sub: 'MINEDU e IDEX',
          phaseTag: 'FASE FINAL: TITULACIÓN',
          phaseStep: 'Paso 05 de 05',
          estimatedTime: 'Día 12 - 15',
          heading: 'Emisión del Título e Inscripción Nacional',
          tasks: [
            'Emisión de la Resolución Directoral de otorgamiento de Título Profesional.',
            'Inscripción en el Registro Nacional de Grados y Títulos del MINEDU.',
            'Entrega solemne del Título Profesional a Nombre de la Nación.'
          ],
          primaryBtnText: 'Descargar Constancia de Registro',
          alertNote: '¡Felicitaciones Colega! El título queda habilitado para el ejercicio docente en todo el territorio nacional.'
        }
      ]
    },

    'enfermeria': {
      id: 'enfermeria',
      cardTitle: 'ENFERMERÍA',
      cardSubtitle: 'Tópico y Atención Médica',
      cardDuration: 'Atención inmediata',
      cardArea: 'Tópico Institucional',
      cardBtnClass: 'bg-[#D97706] hover:bg-[#b45309] text-white',
      cardImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJ1l3yfHxuY86XzS6PeZL3sGSMlI1zmTtnLfsPukTYOHiBtmVMH23KJBddWTYkTZwdcs6HhWQ_FuaNEOa7X4BC8M2Qv4BrERd9VnpAGm04B9TWPo5ebJooUKdpCyxI7eoJeEHRdRROo3iDmSlQwwLb9TRUyRgYJX0mmGd1-t_bRJkbO2MM5EYeh4ATDfiRYCE7bAynFGZJaJWKQgFhm5DpXp_X1hwdJ-55-OnbEUndaDpC0--snTcR8A',
      category: 'Bienestar & Salud',
      code: 'TR-BIEN-006',
      title: 'Servicio de Tópico, Primeros Auxilios y Asistencia Médica',
      typeBadge: 'Trámite Gratuito',
      description: 'Atención médica inmediata, primeros auxilios, triaje general, evaluación psicopedagógica, control preventivo de salud y expedición de justificaciones médicas oficiales para toda la comunidad estudiantil.',
      cost: 'S/ 0.00',
      costDetail: 'Servicio 100% gratuito subvencionado',
      paymentMethod: 'Sin Costo',
      paymentDetail: 'Cubierto por la Unidad de Bienestar Estudiantil',
      duration: 'Atención Inmediata',
      durationDetail: 'Sin cita previa / Urgencias permanentes',
      area: 'Tópico Institucional',
      areaDetail: 'Unidad de Bienestar Estudiantil',
      location: 'Sede Central MAHP - Pabellón de Servicios Estudiantiles (Planta Baja)',
      steps: [
        {
          num: 1,
          title: '1. Registro y Triaje',
          sub: 'Ingreso a tópico',
          phaseTag: 'FASE INICIAL: TRIAJE',
          phaseStep: 'Paso 01 de 05',
          estimatedTime: 'Inmediato (05 min)',
          heading: 'Recepción del Estudiante y Control de Signos Vitales',
          tasks: [
            'Presentación del Carné de Estudiante o DNI en la ventanilla del tópico.',
            'Toma de presión arterial, frecuencia cardíaca, saturación de oxígeno y temperatura.',
            'Llenado de la ficha médica de ingreso ambulatorio.'
          ],
          primaryBtnText: 'Llenar Ficha de Atención',
          alertNote: 'En casos de emergencia crítica o accidente en campus, el personal brinda auxilio inmediato sin trámite documental previo.'
        },
        {
          num: 2,
          title: '2. Evaluación Médica',
          sub: 'Personal de enfermería',
          phaseTag: 'FASE CLÍNICA: ATENCIÓN',
          phaseStep: 'Paso 02 de 05',
          estimatedTime: '15 - 20 minutos',
          heading: 'Diagnóstico Clínico Básico y Cuidados Primarios',
          tasks: [
            'Evaluación física y auscultación por profesional de salud colegiado.',
            'Administración de medicación oral básica de emergencia disponible en botiquín.',
            'Curación ambulatoria de heridas leves o estabilización.'
          ],
          primaryBtnText: 'Ver Medicamentos Cubiertos',
          alertNote: 'La medicación se otorga bajo estricta prescripción y con consentimiento del alumno.'
        },
        {
          num: 3,
          title: '3. Reposo y Observación',
          sub: 'Camilla de reposo',
          phaseTag: 'FASE DE MONITOREO',
          phaseStep: 'Paso 03 de 05',
          estimatedTime: '30 a 60 minutos',
          heading: 'Estancia en Sala de Recuperación Ambulatoria',
          tasks: [
            'Descanso vigilado en camilla con monitoreo continuo.',
            'Evaluación de evolución clínica y remisión de sintomatología.',
            'Coordinación con Bienestar Social para contacto telefónico con familiares si fuera necesario.'
          ],
          primaryBtnText: 'Contactar a Bienestar Estudiantil',
          alertNote: 'Si la condición del alumno lo amerita, se coordina ambulancia hacia el Hospital Regional de Ayacucho.'
        },
        {
          num: 4,
          title: '4. Justificación Médica',
          sub: 'Emisión de constancia',
          phaseTag: 'FASE ADMINISTRATIVA: JUSTIFICACIÓN',
          phaseStep: 'Paso 04 de 05',
          estimatedTime: '10 minutos',
          heading: 'Expedición de Justificación Oficial de Clases',
          tasks: [
            'Emisión del Certificado Médico Interno que justifica la inasistencia o examen.',
            'Firma y número de colegiatura del profesional médico / enfermero a cargo.',
            'Sellado oficial de la Unidad de Bienestar Estudiantil.'
          ],
          primaryBtnText: 'Descargar Constancia Médica',
          alertNote: 'El estudiante debe presentar la justificación a sus docentes dentro del plazo reglamentario de 48 horas.'
        },
        {
          num: 5,
          title: '5. Seguimiento Preventivo',
          sub: 'Cierre de atención',
          phaseTag: 'FASE FINAL: PREVENCIÓN',
          phaseStep: 'Paso 05 de 05',
          estimatedTime: 'Posterior',
          heading: 'Registro en Historial y Derivación Psicopedagógica',
          tasks: [
            'Actualización del expediente de salud integral del alumno en base de datos.',
            'Derivación al área de psicología o nutrición si se detectan cuadros de estrés o salud vulnerada.',
            'Entrega de recomendaciones de autocuidado y descanso médico.'
          ],
          primaryBtnText: 'Agendar Cita en Psicología',
          alertNote: '¡Atención completada! Los servicios de bienestar son un derecho de todos los estudiantes del MAHP.'
        }
      ]
    }
  };

  function App() {
    const [currentView, setCurrentView] = useState('catalog');
    const [selectedProcKey, setSelectedProcKey] = useState('matricula');
    const [activeStepIndex, setActiveStepIndex] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [checkedTasks, setCheckedTasks] = useState({});

    // Estado del Modal de FUT Digital
    const [isFutModalOpen, setIsFutModalOpen] = useState(false);
    const [futSubmittedExp, setFutSubmittedExp] = useState(null);
    const [futForm, setFutForm] = useState({
      nombres: '',
      dni: '',
      carrera: 'Educación Inicial',
      ciclo: 'Ciclo I',
      motivo: ''
    });

    const handleOpenDetail = (key) => {
      setSelectedProcKey(key);
      setActiveStepIndex(0);
      setCurrentView('detail');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBackToCatalog = () => {
      setCurrentView('catalog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentProc = PROCEDURES_DATA[selectedProcKey] || PROCEDURES_DATA['matricula'];
    const currentStep = currentProc.steps[activeStepIndex] || currentProc.steps[0];

    const handleToggleCheckbox = (taskIndex) => {
      const key = `${selectedProcKey}_s${activeStepIndex}_t${taskIndex}`;
      setCheckedTasks(prev => ({
        ...prev,
        [key]: !prev[key]
      }));
    };

    // Descarga simulada de archivo PDF oficial
    const handleDownloadFUT = () => {
      const content = `=================================================================\nIESP MANUEL ANTONIO HIERRO POZO - AYACUCHO\nFORMATO ÚNICO DE TRÁMITE (FUT) OFICIAL 2026\n=================================================================\n\nTrámite: ${currentProc.title}\nCódigo TUPA: ${currentProc.code}\nÁrea de Atención: ${currentProc.area}\nFecha de Solicitud: ${new Date().toLocaleDateString('es-PE')}\n\nREQUISITOS ADJUNTOS:\n- Copia de DNI vigente\n- Recibo de caja o derecho institucional\n- Documentación académica justificatoria\n\n-----------------------------------------------------------------\nFirma del Solicitud: ___________________________\nDocumento generado automáticamente por el Portal Institucional MAHP\n`;
      const blob = new Blob([content], { type: 'application/pdf;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `FUT_Oficial_IESP_MAHP_${currentProc.id}.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    };

    // Manejo de envío del formulario FUT Digital
    const handleFutSubmit = (e) => {
      e.preventDefault();
      const randomExp = `EXP-2026-${Math.floor(10000 + Math.random() * 90000)}`;
      setFutSubmittedExp(randomExp);
    };

    const resetFutModal = () => {
      setFutSubmittedExp(null);
      setFutForm({
        nombres: '',
        dni: '',
        carrera: 'Educación Inicial',
        ciclo: 'Ciclo I',
        motivo: ''
      });
      setIsFutModalOpen(false);
    };

    const filteredProcedures = useMemo(() => {
      const query = searchQuery.trim().toLowerCase();
      const list = Object.values(PROCEDURES_DATA);
      if (!query) return list;
      return list.filter(item => 
        item.cardTitle.toLowerCase().includes(query) ||
        item.cardSubtitle.toLowerCase().includes(query) ||
        item.cardArea.toLowerCase().includes(query)
      );
    }, [searchQuery]);

    return (
      <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
        
        {/* ============================================================== */}
        {/* 1. NAVBAR INSTITUCIONAL RESTAURADO                             */}
        {/* ============================================================== */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
          {/* Topbar azul marino institucional (#1E3A8A) */}
          <div className="bg-[#1E3A8A] text-white px-4 sm:px-6 lg:px-12 py-2.5">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-3 cursor-pointer group" onClick={handleBackToCatalog}>
                <div className="w-9 h-9 rounded-full bg-[#991B1B] flex items-center justify-center font-bold text-white text-base shadow-sm ring-2 ring-white/20 group-hover:scale-105 transition-transform">
                  M
                </div>
                <div>
                  <h1 className="font-extrabold text-xs sm:text-sm tracking-wide uppercase leading-tight font-sans text-white">
                    IESP MANUEL ANTONIO HIERRO POZO
                  </h1>
                  <p className="text-[11px] text-blue-100 leading-none mt-0.5 font-medium">
                    Portal Institucional de Trámites Académicos
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <nav className="hidden md:flex items-center gap-6 text-xs text-blue-100 font-medium">
                  <button 
                    onClick={handleBackToCatalog} 
                    className={`hover:text-white transition-colors pb-0.5 ${currentView === 'catalog' ? 'text-white border-b-2 border-[#D97706] font-bold' : ''}`}
                  >
                    Catálogo de Trámites
                  </button>
                  <a href="#consulta" onClick={(e) => { e.preventDefault(); alert("Módulo de Consulta: Ingresa con tu DNI para conocer el estado de tu trámite."); }} className="hover:text-white transition-colors">
                    Consulta de Estado
                  </a>
                  <a href="#mesa" onClick={(e) => { e.preventDefault(); setIsFutModalOpen(true); }} className="hover:text-white transition-colors">
                    Mesa de Partes
                  </a>
                  <a href="#orientacion" onClick={(e) => { e.preventDefault(); alert("Canal de Orientación Telefónica: (066) 285612 o al correo mesadepartes@iespmahp.edu.pe"); }} className="hover:text-white transition-colors">
                    Orientación
                  </a>
                </nav>
                <button
                  onClick={() => alert("Sesión del Estudiante activa: Portal SIA-MAHP")}
                  className="w-8 h-8 rounded-full bg-[#991B1B] hover:bg-[#7f1d1d] text-white flex items-center justify-center shadow transition-transform active:scale-95 ring-1 ring-white/30"
                  title="Cuenta Institucional"
                >
                  <span className="material-symbols-outlined text-[18px]">person</span>
                </button>
              </div>
            </div>
          </div>

          {/* Breadcrumb exacto de SCREEN_4 */}
          <div className="bg-white px-4 sm:px-6 lg:px-12 py-2 border-b border-slate-100 text-xs">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[#64748B] overflow-x-auto py-0.5">
                <button onClick={handleBackToCatalog} className="hover:text-[#1E3A8A] transition-colors font-medium">
                  Inicio
                </button>
                <span className="text-slate-300">›</span>
                <button onClick={handleBackToCatalog} className={`hover:text-[#1E3A8A] transition-colors ${currentView === 'catalog' ? 'text-[#0F172A] font-bold' : ''}`}>
                  Catálogo de Trámites
                </button>
                {currentView === 'detail' && (
                  <>
                    <span className="text-slate-300">›</span>
                    <span className="text-[#64748B] font-medium">{currentProc.category}</span>
                    <span className="text-slate-300">›</span>
                    <span className="text-[#991B1B] font-bold truncate max-w-[200px] sm:max-w-none">{currentProc.title}</span>
                  </>
                )}
              </div>

              {currentView === 'detail' && (
                <button
                  onClick={handleBackToCatalog}
                  className="inline-flex items-center gap-1.5 font-bold text-[#1E3A8A] hover:text-[#991B1B] transition-colors text-xs whitespace-nowrap pl-3"
                >
                  <span className="text-sm">←</span> VOLVER AL CATÁLOGO
                </button>
              )}
            </div>
          </div>
        </header>

        {/* ============================================================== */}
        {/* CUERPO PRINCIPAL                                              */}
        {/* ============================================================== */}
        <main className="flex-1">

          {/* ------------------------------------------------------------ */}
          {/* VISTA 1: CATÁLOGO DE TRÁMITES                                */}
          {/* ------------------------------------------------------------ */}
          {currentView === 'catalog' && (
            <div>
              {/* HERO PRINCIPAL: PROPORCIÓN EXACTA DE SCREEN_4 (SIN MIN-H-SCREEN) */}
              <section className="relative bg-[#0F2438] text-white py-14 md:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden shadow-inner">
                {/* Imagen IMAGE_9 con visualización clara y nítida de los estudiantes */}
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwDb-loNHHYybY4p8pghZqGDCGQQ-qYh_DhOFbhE305NRE_o6H313Ro34KCz95Z_1LKCibHR0AssVXrSVXjpyJ1hJEq9Ifb3ZrLesf8c-vbz1A15uMJVcsbWsnu0IOF2plmAZ7Wom5AAA8hnfM38v2He7B5meAzrzfCxSW2zqqxK4rTBKz7ZdTSNtnzMq8prcNuQy6Up5C-TC5VAsr1N4gaho8Ie5ufWBnt5ipBERi1gT41WtXoY-HRQ"
                  alt="Estudiantes en biblioteca campus MAHP"
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-70 filter contrast-105 brightness-105 mix-blend-normal scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F2438]/90 via-[#0F2438]/70 to-[#0F2438]/40 backdrop-blur-[1px]"></div>

                <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 z-10">
                  
                  {/* Textos y Buscador */}
                  <div className="max-w-2xl space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold text-amber-300">
                      <span className="w-2 h-2 rounded-full bg-[#D97706] animate-ping"></span>
                      Periodo Académico Ordinario 2026
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans drop-shadow-sm">
                      Guía del Estudiante
                    </h2>
                    <p className="text-slate-100 text-sm sm:text-base leading-relaxed max-w-xl font-normal drop-shadow">
                      Aquí encontrarás de forma clara y estructurada todos los requisitos, procedimientos y consideraciones necesarias para gestionar tus trámites con éxito.
                    </p>

                    {/* Buscador y Píldoras Sugeridas */}
                    <div className="pt-2 space-y-3 max-w-xl">
                      <label className="block text-xs font-medium text-slate-200">
                        Para empezar, busca tu trámite o servicio institucional:
                      </label>
                      
                      <div className="relative flex items-center bg-white rounded-xl shadow-2xl p-1.5 border border-white/40 ring-1 ring-black/10 focus-within:ring-2 focus-within:ring-[#1E3A8A] transition-all">
                        <div className="pl-3 pr-2 text-[#64748B] flex items-center">
                          <span className="material-symbols-outlined text-2xl">search</span>
                        </div>
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="¿Qué trámite o servicio necesitas hoy? Ej: Certificado, Matrícula, FUT..."
                          className="w-full py-2 bg-transparent text-[#0F172A] placeholder:text-slate-400 text-sm sm:text-base focus:outline-none font-medium border-0"
                        />
                        {searchQuery && (
                          <button
                            onClick={() => setSearchQuery('')}
                            className="px-2 text-slate-400 hover:text-slate-700 font-bold text-sm"
                            title="Limpiar búsqueda"
                          >
                            ✕
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => {}}
                          className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-[#1E3A8A] hover:bg-[#172554] active:scale-95 text-white font-bold text-sm rounded-lg transition-all shadow-md shrink-0 ml-1"
                        >
                          Buscar
                        </button>
                      </div>

                      {/* Chips interactivos de búsqueda rápida */}
                      <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                        <span className="text-slate-300 font-medium">Sugeridos:</span>
                        {[
                          { label: 'Matrícula 2026', query: 'Matrícula' },
                          { label: 'Certificados', query: 'Certificados' },
                          { label: 'Constancias', query: 'Constancias' },
                          { label: 'Titulación', query: 'Titulación' }
                        ].map((chip) => (
                          <button
                            key={chip.label}
                            type="button"
                            onClick={() => setSearchQuery(chip.query)}
                            className="px-2.5 py-1 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/20 transition-colors font-medium active:scale-95"
                          >
                            {chip.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tarjeta distintiva institucional a la derecha */}
                  <div className="shrink-0 bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 flex items-center gap-4 max-w-sm shadow-2xl">
                    <div className="w-14 h-14 rounded-2xl bg-[#991B1B] border-2 border-white/40 flex items-center justify-center text-white font-extrabold text-2xl shadow-lg ring-2 ring-[#991B1B]/40">
                      M
                    </div>
                    <div className="text-left">
                      <span className="block text-[10px] text-slate-200 uppercase tracking-widest font-semibold">
                        INSTITUTO DE EDUCACIÓN SUPERIOR PÚBLICO
                      </span>
                      <span className="block text-sm font-extrabold text-white tracking-wider uppercase leading-snug mt-0.5 font-sans">
                        MANUEL ANTONIO HIERRO POZO
                      </span>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="inline-flex items-center gap-1 text-[11px] text-[#D97706] bg-amber-400/20 px-2 py-0.5 rounded font-bold">
                          ★ AYACUCHO • LICENCIADO MINEDU
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              {/* SECCIÓN DEL CATÁLOGO DE TRÁMITES */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                    Catálogo de <span className="text-[#1E3A8A]">Trámites</span>
                  </h2>
                  <p className="text-[#64748B] text-sm mt-2 font-normal">
                    Gestiona tus solicitudes y servicios académicos de manera rápida, transparente y sencilla.
                  </p>
                </div>

                {/* GRID DE LAS 6 TARJETAS (3 columnas x 2 filas) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {filteredProcedures.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col group"
                    >
                      {/* Portada con Overlay Oscuro y Título Centrado */}
                      <div className="relative h-48 w-full overflow-hidden">
                        <img
                          src={item.cardImg}
                          alt={item.cardTitle}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/45 flex items-center justify-center p-4">
                          <span className="text-white text-xl sm:text-2xl font-black tracking-wider uppercase font-sans drop-shadow-md text-center">
                            {item.cardTitle}
                          </span>
                        </div>
                      </div>

                      {/* Contenido descriptivo */}
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-[#0F172A] font-bold text-base leading-snug">
                            {item.cardSubtitle}
                          </h3>

                          <div className="mt-4 space-y-1.5 text-xs text-[#64748B] font-medium">
                            <div className="flex items-center gap-2">
                              <span className="material-symbols-outlined text-base text-[#D97706]">schedule</span>
                              <span>{item.cardDuration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="material-symbols-outlined text-base text-[#1E3A8A]">account_balance</span>
                              <span>{item.cardArea}</span>
                            </div>
                          </div>
                        </div>

                        {/* Botón Ver Más */}
                        <div className="mt-6">
                          <button
                            onClick={() => handleOpenDetail(item.id)}
                            className={`w-full py-2.5 px-4 rounded-xl font-bold text-sm tracking-wide transition-all shadow-sm flex items-center justify-center gap-1.5 active:scale-[0.98] ${item.cardBtnClass}`}
                          >
                            Ver más
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredProcedures.length === 0 && (
                  <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                    <p className="text-[#64748B] text-sm">No se encontraron trámites para "{searchQuery}".</p>
                    <button
                      onClick={() => setSearchQuery('')}
                      className="mt-3 text-[#1E3A8A] text-sm font-semibold underline"
                    >
                      Restablecer catálogo
                    </button>
                  </div>
                )}
              </section>
            </div>
          )}

          {/* ------------------------------------------------------------ */}
          {/* VISTA 2: DETALLE DEL TRÁMITE + STEPPER INTERACTIVO          */}
          {/* ------------------------------------------------------------ */}
          {currentView === 'detail' && (
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6 space-y-6">
              
              {/* 1. BANNER AZUL FORMAL DE CABECERA (#1E3A8A / #0F2438) */}
              <div className="bg-gradient-to-r from-[#1E3A8A] via-[#1E3A8A] to-[#0F2438] rounded-2xl p-6 sm:p-8 text-white shadow-md relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="space-y-3 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-md border border-white/20">
                        <span className="w-2 h-2 rounded-full bg-[#D97706]"></span>
                        CÓDIGO TUPA: {currentProc.code}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-white/10 text-blue-100 text-xs font-medium px-3 py-1 rounded-md">
                        <span>📄</span> {currentProc.typeBadge}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-sans">
                      {currentProc.title}
                    </h2>

                    <p className="text-blue-100 text-xs sm:text-sm leading-relaxed max-w-2xl font-normal">
                      {currentProc.description}
                    </p>
                  </div>

                  <div className="shrink-0 self-start md:self-auto flex items-center gap-2">
                    <button
                      onClick={() => window.print()}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-[#0F172A] rounded-xl text-xs sm:text-sm font-bold shadow-md hover:bg-slate-50 transition-colors active:scale-95"
                    >
                      <span className="material-symbols-outlined text-lg">print</span> Imprimir Ficha
                    </button>
                  </div>
                </div>
              </div>

              {/* 2. 4 TARJETAS MÉTRICAS DE RESUMEN CON ALTO CONTRASTE */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Costo */}
                <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#991B1B] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-2xl">payments</span>
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                      Costo por Periodo
                    </span>
                    <span className="block text-base font-extrabold text-[#0F172A] truncate">
                      {currentProc.cost}
                    </span>
                    <span className="block text-[11px] text-[#64748B] truncate">
                      {currentProc.costDetail}
                    </span>
                  </div>
                </div>

                {/* Modalidad de Pago */}
                <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-2xl">point_of_sale</span>
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                      Modalidad de Pago
                    </span>
                    <span className="block text-base font-extrabold text-[#0F172A] truncate">
                      {currentProc.paymentMethod}
                    </span>
                    <span className="block text-[11px] text-[#64748B] truncate">
                      {currentProc.paymentDetail}
                    </span>
                  </div>
                </div>

                {/* Plazo de Expedición */}
                <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#D97706] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-2xl">hourglass_top</span>
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                      Plazo de Expedición
                    </span>
                    <span className="block text-base font-extrabold text-[#0F172A] truncate">
                      {currentProc.duration}
                    </span>
                    <span className="block text-[11px] text-[#64748B] truncate">
                      {currentProc.durationDetail}
                    </span>
                  </div>
                </div>

                {/* Área Competente */}
                <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#64748B] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-2xl">corporate_fare</span>
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                      Área Competente
                    </span>
                    <span className="block text-base font-extrabold text-[#0F172A] truncate">
                      {currentProc.area}
                    </span>
                    <span className="block text-[11px] text-[#64748B] truncate">
                      {currentProc.areaDetail}
                    </span>
                  </div>
                </div>
              </div>

              {/* 3. STEPPER HORIZONTAL INTERACTIVO ENRIQUECIDO */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 dot-pattern relative">
                <div className="text-center max-w-xl mx-auto mb-8">
                  <span className="text-[11px] font-extrabold text-[#1E3A8A] tracking-widest uppercase block">
                    ······ PROCESO DE ATENCIÓN OFICIAL ······
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mt-1">
                    Etapas del flujo interactivo del trámite
                  </h3>
                  <p className="text-xs text-[#64748B] mt-1.5">
                    Haz clic sobre cada etapa para consultar requisitos obligatorios, oficina a cargo y validaciones.
                  </p>

                  {/* Barra de Progreso Visual Global */}
                  <div className="mt-4 max-w-xs mx-auto">
                    <div className="flex justify-between text-[11px] font-bold text-[#64748B] mb-1">
                      <span>Progreso del Trámite</span>
                      <span className="text-[#1E3A8A]">{Math.round(((activeStepIndex + 1) / currentProc.steps.length) * 100)}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#1E3A8A] transition-all duration-500 rounded-full"
                        style={{ width: `${((activeStepIndex + 1) / currentProc.steps.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* STEPPER HORIZONTAL CON NODOS Y LÍNEA GUÍA */}
                <div className="relative mb-8">
                  <div className="hidden md:block absolute top-[52px] left-[10%] right-[10%] border-t-2 border-dashed border-[#1E3A8A]/30 z-0"></div>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-2 relative z-10">
                    {currentProc.steps.map((st, idx) => {
                      const isActive = idx === activeStepIndex;
                      const isPast = idx < activeStepIndex;

                      return (
                        <div
                          key={st.num}
                          onClick={() => setActiveStepIndex(idx)}
                          className={`flex flex-col items-center text-center cursor-pointer group select-none transition-all duration-300 ${
                            isActive ? 'transform -translate-y-1 scale-105' : 'hover:-translate-y-1'
                          }`}
                        >
                          <div className="relative flex items-center justify-center mb-2">
                            <div
                              className={`w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center transition-all duration-300 ${
                                idx % 2 === 0 ? 'organic-blob' : 'organic-blob-alt'
                              } ${
                                isActive
                                  ? 'bg-[#1E3A8A] text-white shadow-xl ring-4 ring-[#1E3A8A]/20 stepper-active-glow'
                                  : isPast
                                  ? 'bg-blue-100 text-[#1E3A8A] group-hover:bg-blue-200'
                                  : 'bg-[#F1F5F9] text-[#64748B] group-hover:bg-blue-50 group-hover:text-[#1E3A8A]'
                              }`}
                            >
                              <span className="material-symbols-outlined text-3xl sm:text-4xl">
                                {idx === 0 && 'description'}
                                {idx === 1 && 'payments'}
                                {idx === 2 && 'fact_check'}
                                {idx === 3 && 'edit_note'}
                                {idx === 4 && 'stars'}
                              </span>
                            </div>

                            <div className={`absolute -bottom-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shadow-md transition-colors ${
                              isActive
                                ? 'bg-[#D97706] text-white ring-2 ring-white'
                                : isPast
                                ? 'bg-[#1E3A8A] text-white'
                                : 'bg-slate-300 text-[#0F172A]'
                            }`}>
                              {st.num}
                            </div>
                          </div>

                          <div className="mt-3 px-1">
                            <h4 className={`text-xs font-bold transition-colors leading-tight ${
                              isActive ? 'text-[#1E3A8A] font-extrabold' : 'text-[#0F172A]'
                            }`}>
                              {st.title}
                            </h4>
                            <p className="text-[11px] text-[#64748B] mt-0.5 leading-none">
                              {st.sub}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 4. TARJETA INFERIOR REACTIVA SEGÚN PASO SELECCIONADO */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    
                    {/* Columna Izquierda: Requisitos y Checklist */}
                    <div className="lg:col-span-2 space-y-5">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider bg-blue-50 text-[#1E3A8A] px-2.5 py-1 rounded border border-blue-100">
                            {currentStep.phaseTag}
                          </span>
                          <span className="text-xs text-[#64748B] font-bold">
                            {currentStep.phaseStep}
                          </span>
                        </div>
                        <span className="text-xs text-[#64748B] flex items-center gap-1 font-medium">
                          <span className="material-symbols-outlined text-sm text-[#D97706]">schedule</span>
                          Plazo estimado: <strong className="text-[#0F172A]">{currentStep.estimatedTime}</strong>
                        </span>
                      </div>

                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                          {currentStep.heading}
                        </h4>
                        <p className="text-xs font-bold text-[#64748B] uppercase tracking-wider mt-1">
                          REQUISITOS OBLIGATORIOS Y ACCIONES:
                        </p>
                      </div>

                      {/* Checklist interactivo con marcas */}
                      <div className="space-y-2.5">
                        {currentStep.tasks.map((task, idx) => {
                          const taskKey = `${selectedProcKey}_s${activeStepIndex}_t${idx}`;
                          const isChecked = !!checkedTasks[taskKey];

                          return (
                            <label
                              key={idx}
                              className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                                isChecked
                                  ? 'bg-blue-50/70 border-blue-200 text-[#0F172A] shadow-sm'
                                  : 'bg-[#F8FAFC] border-slate-200 hover:bg-slate-50 text-[#0F172A]'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => handleToggleCheckbox(idx)}
                                className="mt-0.5 w-4 h-4 rounded text-[#1E3A8A] focus:ring-[#1E3A8A] border-slate-300 cursor-pointer"
                              />
                              <span className={`text-xs sm:text-sm select-none leading-relaxed ${isChecked ? 'line-through text-[#64748B] font-medium' : 'font-normal'}`}>
                                {task}
                              </span>
                            </label>
                          );
                        })}
                      </div>

                      <p className="text-[11px] text-[#64748B] italic">
                        💡 Puedes marcar las casillas para validar tu progreso en esta etapa del trámite.
                      </p>

                      {/* Botones de acción directa funcionales */}
                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <button
                          onClick={() => setIsFutModalOpen(true)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#991B1B] hover:bg-[#7f1d1d] active:scale-95 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all"
                        >
                          <span className="material-symbols-outlined text-base">edit_document</span>
                          {currentStep.primaryBtnText}
                        </button>

                        <button
                          onClick={handleDownloadFUT}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1E3A8A] hover:bg-[#172554] active:scale-95 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all"
                        >
                          <span className="material-symbols-outlined text-base">download</span>
                          Descargar Formato FUT (PDF)
                        </button>
                      </div>
                    </div>

                    {/* Columna Derecha: Unidad Competente, Alerta y Controles */}
                    <div className="space-y-4 lg:border-l lg:border-slate-100 lg:pl-6">
                      <div className="bg-[#F1F5F9] border border-slate-200 rounded-xl p-4">
                        <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">
                          UNIDAD COMPETENTE
                        </span>
                        <div className="flex items-start gap-3 mt-2">
                          <div className="w-10 h-10 rounded-lg bg-white text-[#1E3A8A] shadow-sm flex items-center justify-center shrink-0 border border-slate-200">
                            <span className="material-symbols-outlined text-xl">corporate_fare</span>
                          </div>
                          <div>
                            <h5 className="font-bold text-xs text-[#0F172A] leading-snug">
                              {currentProc.area} (Presencial o Virtual)
                            </h5>
                            <p className="text-[11px] text-[#64748B] mt-0.5">
                              {currentProc.location}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-amber-50 border border-[#D97706]/30 rounded-xl p-4 flex items-start gap-3">
                        <span className="material-symbols-outlined text-[#D97706] text-xl shrink-0 mt-0.5">warning</span>
                        <div>
                          <h5 className="text-xs font-bold text-[#0F172A] leading-snug">
                            Importante sobre la modalidad
                          </h5>
                          <p className="text-[11px] text-[#334155] leading-relaxed mt-1">
                            {currentStep.alertNote}
                          </p>
                        </div>
                      </div>

                      {/* Controles de Navegación de Pasos con reactividad real */}
                      <div className="pt-2 flex items-center justify-between gap-2 border-t border-slate-100">
                        <button
                          disabled={activeStepIndex === 0}
                          onClick={() => {
                            setActiveStepIndex(prev => Math.max(0, prev - 1));
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#64748B] hover:text-[#1E3A8A] disabled:opacity-30 disabled:cursor-not-allowed px-3 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                        >
                          <span>←</span> Paso Anterior
                        </button>

                        <span className="text-[11px] text-[#64748B] font-bold">
                          {activeStepIndex + 1} / {currentProc.steps.length}
                        </span>

                        <button
                          disabled={activeStepIndex === currentProc.steps.length - 1}
                          onClick={() => {
                            setActiveStepIndex(prev => Math.min(currentProc.steps.length - 1, prev + 1));
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#1E3A8A] hover:bg-[#172554] disabled:opacity-30 disabled:cursor-not-allowed px-3.5 py-2 rounded-lg shadow-sm transition-all"
                        >
                          Siguiente Paso <span>→</span>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* BARRA INFERIOR DE SOPORTE Y CONTACTO */}
              <div className="bg-white rounded-xl border border-slate-200 p-4 px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-3 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-bold text-[#0F172A]">Mesa de Partes Virtual disponible</span>
                  <span className="text-slate-300 hidden sm:inline">|</span>
                  <span className="hidden sm:inline font-medium">Horario presencial: Lun - Vie 8:00 AM - 1:00 PM</span>
                </div>
                <div className="flex items-center gap-3 font-medium">
                  <span>Ayuda al estudiante: <a href="mailto:mesadepartes@iespmahp.edu.pe" className="text-[#1E3A8A] hover:underline font-bold">mesadepartes@iespmahp.edu.pe</a></span>
                  <span className="text-slate-300">|</span>
                  <span>Ayacucho, Perú</span>
                </div>
              </div>

            </div>
          )}

        </main>

        {/* ============================================================== */}
        {/* MODAL FLOTANTE INTERACTIVO: FORMULARIO ÚNICO DE TRÁMITE (FUT) */}
        {/* ============================================================== */}
        {isFutModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
              
              {/* Botón de Cierre */}
              <button
                onClick={resetFutModal}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-sm transition-colors"
              >
                ✕
              </button>

              {!futSubmittedExp ? (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#991B1B] text-white flex items-center justify-center font-bold text-lg">
                      FUT
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-[#0F172A]">
                        Formulario Único de Trámite Digital
                      </h3>
                      <p className="text-xs text-[#64748B]">
                        IESP Manuel Antonio Hierro Pozo • Mesa de Partes
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mb-5 pb-3 border-b border-slate-100">
                    Trámite seleccionado: <strong className="text-[#1E3A8A]">{currentProc.title}</strong>
                  </p>

                  <form onSubmit={handleFutSubmit} className="space-y-4 text-xs">
                    <div>
                      <label className="block font-bold text-[#0F172A] mb-1">
                        Nombres y Apellidos Completos *
                      </label>
                      <input
                        type="text"
                        required
                        value={futForm.nombres}
                        onChange={(e) => setFutForm({...futForm, nombres: e.target.value})}
                        placeholder="Ej: Juan Carlos Pérez Mendoza"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-[#0F172A] focus:ring-2 focus:ring-[#1E3A8A] focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-bold text-[#0F172A] mb-1">
                          Nº Documento (DNI/CE) *
                        </label>
                        <input
                          type="text"
                          required
                          maxLength="9"
                          value={futForm.dni}
                          onChange={(e) => setFutForm({...futForm, dni: e.target.value})}
                          placeholder="Ej: 72839102"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-[#0F172A] focus:ring-2 focus:ring-[#1E3A8A] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-[#0F172A] mb-1">
                          Ciclo Académico *
                        </label>
                        <select
                          value={futForm.ciclo}
                          onChange={(e) => setFutForm({...futForm, ciclo: e.target.value})}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-[#0F172A] focus:ring-2 focus:ring-[#1E3A8A] focus:outline-none bg-white"
                        >
                          <option>Ciclo I</option>
                          <option>Ciclo II</option>
                          <option>Ciclo III</option>
                          <option>Ciclo IV</option>
                          <option>Ciclo V</option>
                          <option>Ciclo VI</option>
                          <option>Egresado</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-[#0F172A] mb-1">
                        Programa de Estudios / Especialidad *
                      </label>
                      <select
                        value={futForm.carrera}
                        onChange={(e) => setFutForm({...futForm, carrera: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-[#0F172A] focus:ring-2 focus:ring-[#1E3A8A] focus:outline-none bg-white"
                      >
                        <option>Educación Inicial</option>
                        <option>Educación Primaria EIB</option>
                        <option>Educación Secundaria - Matemática</option>
                        <option>Educación Secundaria - Comunicación</option>
                        <option>Desarrollo de Sistemas de Información</option>
                        <option>Enfermería Técnica</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-[#0F172A] mb-1">
                        Motivo y Fundamentación de la Solicitud *
                      </label>
                      <textarea
                        rows="3"
                        required
                        value={futForm.motivo}
                        onChange={(e) => setFutForm({...futForm, motivo: e.target.value})}
                        placeholder="Detalla de manera precisa los documentos solicitados o la solicitud requerida ante secretaría..."
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm text-[#0F172A] focus:ring-2 focus:ring-[#1E3A8A] focus:outline-none"
                      ></textarea>
                    </div>

                    <div className="pt-2 flex items-center justify-end gap-3">
                      <button
                        type="button"
                        onClick={resetFutModal}
                        className="px-4 py-2.5 rounded-lg text-[#64748B] hover:bg-slate-100 font-bold transition-colors"
                      >
                        Cancelar
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2.5 rounded-lg bg-[#991B1B] hover:bg-[#7f1d1d] text-white font-bold shadow transition-all active:scale-95"
                      >
                        Enviar Solicitud
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center py-4 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-3xl font-black">
                    ✓
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0F172A]">
                    ¡Solicitud Registrada con Éxito!
                  </h3>
                  <p className="text-xs text-[#64748B] max-w-sm mx-auto">
                    Tu expediente ha ingresado formalmente al sistema de Mesa de Partes Virtual del IESP Manuel Antonio Hierro Pozo.
                  </p>

                  <div className="bg-[#F1F5F9] border border-slate-200 p-4 rounded-xl max-w-xs mx-auto text-left">
                    <span className="block text-[11px] font-bold text-[#64748B] uppercase">Código de Expediente:</span>
                    <span className="block text-lg font-black text-[#1E3A8A] tracking-wider mt-0.5">{futSubmittedExp}</span>
                    <span className="block text-[11px] text-[#64748B] mt-2">Estudiante: <strong>{futForm.nombres || 'Postulante'}</strong></span>
                  </div>

                  <div className="pt-3 flex justify-center gap-3">
                    <button
                      onClick={resetFutModal}
                      className="px-6 py-2.5 bg-[#1E3A8A] hover:bg-[#172554] text-white font-bold text-xs rounded-xl shadow transition-all"
                    >
                      Aceptar y Cerrar
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* FOOTER INSTITUCIONAL COMPLETO (#0F2438 EXACTO)                */}
        {/* ============================================================== */}
        <footer className="bg-[#0F2438] text-slate-300 pt-14 pb-8 px-4 sm:px-6 lg:px-12 mt-16 text-xs border-t border-slate-800">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-slate-700/60">
            
            {/* COLUMNA 1: LOGO + MISIÓN + REDES */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 bg-white px-3.5 py-2 rounded-lg shadow-sm">
                <div className="w-7 h-7 rounded bg-[#991B1B] text-white flex items-center justify-center font-black text-sm">
                  M
                </div>
                <span className="font-extrabold text-[#0F2438] text-xs uppercase tracking-wider leading-tight">
                  IESP MANUEL ANTONIO<br/>HIERRO POZO
                </span>
              </div>
              
              <p className="text-slate-300 leading-relaxed text-xs max-w-sm">
                Formando profesionales técnicos competentes, innovadores y con sólidos principios éticos para contribuir al desarrollo socioeconómico de la región Ayacucho y el Perú.
              </p>

              {/* Íconos sociales */}
              <div className="flex items-center gap-3 pt-1">
                <a href="#facebook" onClick={(e) => e.preventDefault()} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors" title="Facebook">
                  <span className="font-bold text-xs">f</span>
                </a>
                <a href="#twitter" onClick={(e) => e.preventDefault()} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors" title="Twitter / X">
                  <span className="font-bold text-xs">𝕏</span>
                </a>
                <a href="#linkedin" onClick={(e) => e.preventDefault()} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors" title="LinkedIn">
                  <span className="font-bold text-xs">in</span>
                </a>
              </div>
            </div>

            {/* COLUMNA 2: PORTALES Y TRÁMITES */}
            <div className="space-y-3">
              <h4 className="font-extrabold text-white text-sm tracking-wide">
                Portales y Trámites
              </h4>
              <ul className="space-y-2 text-slate-300 text-xs font-medium">
                <li>
                  <a href="#admision" onClick={(e) => { e.preventDefault(); handleOpenDetail('matricula'); }} className="hover:text-[#D97706] transition-colors">
                    Admisión y Matrículas
                  </a>
                </li>
                <li>
                  <a href="#programas" onClick={(e) => { e.preventDefault(); alert("Consulta de Programas de Estudio Pedagógicos y Tecnológicos."); }} className="hover:text-[#D97706] transition-colors">
                    Programas de Estudio
                  </a>
                </li>
                <li>
                  <a href="#tramites" onClick={(e) => { e.preventDefault(); handleBackToCatalog(); }} className="hover:text-[#D97706] transition-colors">
                    Trámites y Procesos Académicos
                  </a>
                </li>
                <li>
                  <a href="#transparencia" onClick={(e) => { e.preventDefault(); alert("Portal de Transparencia Estándar MINEDU."); }} className="hover:text-[#D97706] transition-colors">
                    Transparencia Institucional
                  </a>
                </li>
                <li>
                  <a href="#bolsa" onClick={(e) => { e.preventDefault(); alert("Bolsa Laboral y Empleabilidad de Egresados."); }} className="hover:text-[#D97706] transition-colors">
                    Bolsa Laboral
                  </a>
                </li>
              </ul>
            </div>

            {/* COLUMNA 3: CONTACTO */}
            <div className="space-y-3">
              <h4 className="font-extrabold text-white text-sm tracking-wide">
                Contacto
              </h4>
              <ul className="space-y-2 text-slate-300 text-xs">
                <li className="flex items-start gap-2">
                  <span className="text-[#D97706] text-sm">📍</span>
                  <span>Av. Universitaria Nº 120, Ayacucho, Perú</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#D97706] text-sm">📞</span>
                  <span>Central Telefónica: (066) 285612</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#D97706] text-sm">✉️</span>
                  <span>Mesa de Partes: mesadepartes@iespmahp.edu.pe</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#D97706] text-sm">🛠️</span>
                  <span>Soporte: soporte@iespmahp.edu.pe</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#D97706] text-sm">🌐</span>
                  <span>www.tecnologicohierropozo.edu.pe</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#D97706] text-sm">🕒</span>
                  <span>Lunes a Viernes: 8:00am - 5:00pm</span>
                </li>
              </ul>
            </div>

          </div>

          {/* FRANJA DE DERECHOS RESERVADOS */}
          <div className="max-w-7xl mx-auto pt-6 text-center text-slate-400 text-xs">
            © 2026 Instituto de Educación Superior Público "Manuel Antonio Hierro Pozo". Todos los derechos reservados.
          </div>
        </footer>

      </div>
    );
  }

export default App;
