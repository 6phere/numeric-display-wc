import { SixphereLitElement, html } from '@sixphere/lit-element'

import { mainStyle } from './styles.js'

/**
 * Allowed statuses. Based on Bootstrap colors
 * @see https://getbootstrap.com/docs/4.3/utilities/colors/
 */
const STATUSES = {
    SUCCESS: "success",
    WARNING: "warning",
    DANGER: "danger"
}

/**
 * Custom Element for showing numeric data through an injected service.
 * 
 */
class PolarisNumericDisplay extends SixphereLitElement {

    /* LIFECYCLE METHODS */

    constructor() {
        super()

        this.title = ""
        this._status = ""
        this._value = null
        this.min = -Infinity
        this.max = Infinity

        this.updateComplete.then(this.onUpdateComplete.bind(this))
    }

    /* STATICS METHODS */

    static get is() { return "polaris-numeric-display" }

    static get properties() {
        return {
            /**
             * Title to be displayed by the component
             */
            title: { type: String },
            /**
             * Statuses based on Bootstrap colors
             * @see https://getbootstrap.com/docs/4.3/utilities/colors/
             */
            _status: { type: String, reflect: true, attribute: 'status' },
            /**
             * Low data boundary
             */
            min: { type: Number },
            /**
             * High data boundary
             */
            max: { type: Number },
            /**
             * Fixed value
             */
            value: { type: Number },
        }
    }

    /**
     * Services injection method using by Sixphere Dependency Injection Wrapper library.
     * 
     * @see https://www.npmjs.com/package/@sixphere/diwrapper
     * 
     * @param {Service} service Data service. Must implement a getData async method.
     */
    __inject(service) {
        this.service = service
    }

    /* METHODS */

    /**
     * UpdateComplete event handler.
     */
    async onUpdateComplete() {
        if (!this.hasService && this.value === null)
            throw new Error(`You must define an attribute value or inject a service for the component [ ${PolarisNumericDisplay.name} ] before init`)

        if (this.hasService)
            await this.getData()

        this.status = this.calculateStatus(this.value)
        await this.requestUpdate()
    }

    /**
     * Getting data through the injected service and redering it as HTML
     */
    async getData() {
        try {
            let response = await this.service.getData()
            this.value = response.data
        } catch (error) {
            this.data = this.noDataSymbol;
        }
    }

    calculateStatus(data) {
        if (this.status)
            return this.status

        if (this.min <= data && data <= this.max)
            return STATUSES.SUCCESS

        return STATUSES.DANGER
    }


    /* Computed properties */

    get noDataSymbol() {
        return "·"
    }

    get hasService() {
        return typeof this.service === "object" && typeof this.service.getData === "function"
    }

    get status() {
        return this._status
    }

    set status(status) {
        this._status = status
    }

    get value() {
        return this._value
    }

    set value(value) {
        this._value = value
    }


    /* RENDERING */

    static get styles() {
        return [
            mainStyle
        ]
    }

    renterTitle() {
        return html`
            <h4 class="poalris-numeric-display__title ${this.statusClass()}" ref="title">${this.title}</div>
        `
    }

    statusClass() {
        return Object.values(STATUSES).includes(this.status) ? `status-${this.status}` : "";
    }

    renderCircle() {
        let title = this.title ? this.renterTitle() : "";
        let status = this.statusClass()

        return html`
            <div ref="circle" class="poalris-numeric-display__circle ${status}">
                <div ref="display" class="poalris-numeric-display__display ${status}">${this.value !== null ? this.value : this.noDataSymbol}</div>
            </div>
            ${title}
        `
    }

    render() {
        return html`
            <div ref="wrapper" class="polaris-numeric-display__wrapper">
                ${this.renderCircle()}
            </div>
        `
    }
}

export { PolarisNumericDisplay }
