$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').click(function() {
  thermostat.up();
  updateTemperature();
  });

  $('#temperature-down').click(function() {
    thermostat.down();
    updateTemperature();
    });

  $('#temperature-reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powersaving-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off');
  });

  $('#powersaving-on').click(function () {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on');
    updateTemperature();
  });





  function updateTemperature() {
    $('#temperature').text(`Current Temperature: ${thermostat.getCurrentTemperature()} degrees`);
    $('#temperature').attr('class', thermostat.energyUsage());
  }





})
