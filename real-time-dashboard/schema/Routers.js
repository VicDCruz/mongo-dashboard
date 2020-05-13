cube(`Routers`, {
  sql: `SELECT * FROM routers.routers`,
  
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
      sql: `fase`,
      type: `string`
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
    
    updatedat: {
      sql: `${CUBE}.\`updatedAt\``,
      type: `time`
    }
  }
});
