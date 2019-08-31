Blockly.Blocks['yfs401'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("waterFlow1", null,["Plugin.waterFlow"], ["Plugin.waterFlow"]), "waterFlow1");
    this.appendDummyInput()
        .appendField("in")
        .appendField(new Blockly.FieldVariable("pulse1", null,["Plugin.pulse"], ["Plugin.pulse"]), "pulse1");
    this.appendDummyInput()
        .appendField("begin");
    this.appendValueInput("YFS401PIN")
        .setCheck("Number")
        .appendField("PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['readwaterflow'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("waterFlow1", null,["Plugin.waterFlow"], ["Plugin.waterFlow"]), "waterFlow1");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
