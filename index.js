const mysql  = require('mysql');
const dotenv = require('dotenv');
const insertSQL = require('./quieries/insert');
const selectSQL = require('./quieries/select');
const deleteSQL = require('./quieries/delete');
const updateSQL = require('./quieries/update');
const createSQL = require('./quieries/create');
/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.load({ path: 'APP.env' });

const dbconn = mysql.createConnection({
  host     : process.env.SQL_HOST,
  user     : process.env.SQL_USER,
  password : process.env.SQL_PASS,
  database : process.env.SQL_DB
});

dbconn.connect(function(err){
  if(err){
    console.log('Database connection error');
  }else{
    console.log('Database connection successful');
  }
});

//insertSQL.stock(dbconn)
//selectSQL.stock(dbconn)
//selectSQL.selectTicker(dbconn);
//selectSQL.selectFundamentalsYear(dbconn, 2016);
//selectSQL.selectAllStocks(dbconn);
//selectSQL.stockFundamentals(dbconn, 'ADI');
//selectSQL.stockSecurities(dbconn, 'ADI');
//selectSQL.stockSecuritiesBySector(dbconn, 'Energy');
//selectSQL.stockTotalsBySector(dbconn, 'Energy');
//selectSQL.stockTotalsByTicker(dbconn, 'ADI');
//selectSQL.stockMaxPrice(dbconn, 'ADI');
//selectSQL.stockMinPrice(dbconn, 'ADI');
//selectSQL.stockAvgPrice(dbconn, 'ADI');
//selectSQL.stockAvgVolume(dbconn, 'ADI');
//selectSQL.marketAvgVolume(dbconn);
//selectSQL.marketMinVolume(dbconn);
//selectSQL.marketMaxVolume(dbconn);
//selectSQL.marketMaxVolume(dbconn);
//selectSQL.sectorAvgVolume(dbconn, 'Energy');
//selectSQL.stockPrices(dbconn, 'ADI');
//deleteSQL.deleteFundamentals(dbconn)
//updateSQL.stock(dbconn)
//createSQL.stock(dbconn)

dbconn.end(function(err) {
  // Function to close database connection
});
