let RecordsReceived = []

module.exports = {
  getRecordsReceivedCount: function () {
    const sendValue = RecordsReceived.length;
    // RecordsReceived = [];
    return sendValue
  },

  getRecordsReceivedValues: function () {
    const sendValue = RecordsReceived;
    // RecordsReceived = [];
    return sendValue
  },

  setRecordsReceived: function (value) {
    if(!RecordsReceived.includes(value)){
        RecordsReceived.push(value);
    }
  },

  resetRecordsReceived: function () {
    RecordsReceived = []
  }
} 