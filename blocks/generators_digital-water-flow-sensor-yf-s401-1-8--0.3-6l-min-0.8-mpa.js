Blockly.JavaScript['yfs401'] = function(block) {
  var variable_waterflow1 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('waterFlow1'), Blockly.Variables.NAME_TYPE);
  var variable_pulse1 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('pulse1'), Blockly.Variables.NAME_TYPE);
  var value_yfs401pin = Blockly.JavaScript.valueToCode(block, 'YFS401PIN', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
    var code =
      `
#VARIABLE
float ${variable_waterflow1};
void ${variable_pulse1}()
{
 ${variable_waterflow1} += 1.0 / 5880.0;
}
#END
attachInterrupt(${value_yfs401pin},${variable_pulse1}, RISING);
\n
`;
  return code;
};
Blockly.JavaScript['readwaterflow'] = function(block) {
  var variable_waterflow1 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('waterFlow1'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variable_waterflow1}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};