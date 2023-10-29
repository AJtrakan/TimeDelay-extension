
Blockly.Python['Dalay_us'] = function(block) {
  Blockly.Python.definitions_['import_time'] = 'import time';


  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

  var code = `time.sleep_us(${value_value})\n`;
  return code;
};
Blockly.Python['Dalay_ms'] = function(block) {
  Blockly.Python.definitions_['import_time'] = 'import time';


  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

  var code = `time.sleep_ms(${value_value})\n`;
  return code;
};
Blockly.Python['Dalay_s'] = function(block) {
  Blockly.Python.definitions_['import_time'] = 'import time';


  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

  var code = `time.sleep(${value_value})\n`;
  return code;
};