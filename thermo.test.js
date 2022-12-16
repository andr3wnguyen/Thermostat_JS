describe('thermostat', () => {
    it('initialises correctly at 20c', () =>
    {
        thermo = require('./thermostat')
        thermostat = new thermo()
        expect(thermostat.getTemperature()).toBe(20)
    })

    it('cranks up the temp by 2', () => {
        thermo = require('./thermostat')
        thermostat = new thermo()
        thermostat.up()
        thermostat.up()
        expect(thermostat.getTemperature()).toBe(22)
    })


    it('cranks down the temp by 2', () => {
        thermo = require('./thermostat')
        thermostat = new thermo()
        thermostat.down()
        thermostat.down()
        expect(thermostat.getTemperature()).toBe(18)
    })

    it('applies powersaving mode, maximum temp 25C', () => {
        thermo = require('./thermostat')
        thermostat = new thermo()
        thermostat.powerSavingMode(true)
        for (let i = 0 ; i < 10 ; i++) {
            thermostat.up();
          }
        expect(thermostat.getTemperature()).toBe(25)
    })

    it('reaches min temp of 10', () => {
        thermo = require('./thermostat')
        thermostat = new thermo()
        for (let i = 0 ; i < 20 ; i++) {
            thermostat.down();
          }
        expect(thermostat.getTemperature()).toBe(10) })

    it('resets the temperature', () => {
        thermo = require('./thermostat')
        thermostat = new thermo()
        thermostat.down()
        thermostat.down()
        thermostat.reset()
        expect(thermostat.getTemperature()).toBe(20)
    })
    it('gets current energy usage', () => {
        thermo = require('./thermostat')
        thermostat = new thermo()
        for (let i = 0 ; i < 10 ; i++) {
            thermostat.up();
          }
        expect(thermostat.getCurrentEnergyUsage()).toBe('high')
        thermostat.reset()
        expect(thermostat.getCurrentEnergyUsage()).toBe('medium')
        for (let i = 0 ; i < 10 ; i++) {
            thermostat.down();
          }
        expect(thermostat.getCurrentEnergyUsage()).toBe('low')
    })

})