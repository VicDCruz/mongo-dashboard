cube(`Routers`, {
  sql: `SELECT * FROM routers.routers`,

  refreshKey: {
    every: `1 second`
  },

  joins: {

  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [createdAt, updatedat]
    }
  },

  dimensions: {
    fase: {
      // sql: `fase`,
      type: `string`,
      case: {
        when: [
          { sql: `${CUBE}.fase = '1'`, label: `Aviso de privacidad` },
          { sql: `${CUBE}.fase = '2'`, label: `Redes sociales` },
          { sql: `${CUBE}.fase = '3'`, label: `Instrucciones` },
        ],
        else: { label: `Desconocido` }
      }
    },

    edad: {
      sql: `edad`,
      type: `string`
    },

    ap1: {
      sql: `ap1`,
      type: `string`
    },

    ap2: {
      sql: `ap2`,
      type: `string`
    },

    cp: {
      sql: `cp`,
      type: `string`
    },

    email: {
      sql: `email`,
      type: `string`
    },

    genero: {
      sql: `genero`,
      type: `string`
    },

    mac: {
      sql: `mac`,
      type: `string`
    },

    noeco: {
      sql: `noeco`,
      type: `string`
    },

    nombre: {
      sql: `nombre`,
      type: `string`
    },

    tipo: {
      sql: `tipo`,
      type: `string`
    },

    urlfoto: {
      sql: `urlfoto`,
      type: `string`
    },

    createdAt: {
      sql: `created_at`,
      type: `time`
    },

    formatTime: {
      sql: `DATE_FORMAT(DATE_SUB(created_at, INTERVAL 5 HOUR), "%k:00")`,
      type: `string`
    },

    updatedat: {
      sql: `${CUBE}.\`updatedAt\``,
      type: `time`
    }
  }
});
