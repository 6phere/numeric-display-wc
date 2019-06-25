import { css, SixphereLitElement, html } from '@sixphere/lit-element';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject() {
  const data = _taggedTemplateLiteral(["\n:host {\n    --blue: #2196f3;\n    --indigo: #3f51b5;\n    --purple: #9c27b0;\n    --pink: #e91e63;\n    --red: #f44336;\n    --orange: #ff9800;\n    --yellow: #ffeb3b;\n    --green: #4caf50;\n    --teal: #009688;\n    --cyan: #00bcd4;\n    --white: #fff;\n    --gray: #6c757d;\n    --gray-dark: #343a40;\n    --primary: #009688;\n    --secondary: #6c757d;\n    --success: #4caf50;\n    --info: #03a9f4;\n    --warning: #ff5722;\n    --danger: #f44336;\n    --light: #f5f5f5;\n    --dark: #424242;\n    --breakpoint-xs: 0;\n    --breakpoint-sm: 576px;\n    --breakpoint-md: 768px;\n    --breakpoint-lg: 992px;\n    --breakpoint-xl: 1200px;\n    --font-family-sans-serif: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; \n}\n\n:host {\n    font-family: var(--font-family-sans-serif);\n    font-weight: 300;\n}\n\nh4 {\n    font-size: 20px;\n    font-weight: 300;\n    margin: 0;\n}\n\n.polaris-numeric-display__wrapper {\n    padding: 10px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.poalris-numeric-display__circle{\n    border: 1px solid #dedede;\n    border-radius: 50%;\n    width: 120px;\n    height: 120px;\n\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.poalris-numeric-display__display{\n    font-size: 55px;\n}\n\n.poalris-numeric-display__title {\n    margin-top: 0.5em;\n}\n\n.status-success {\n    color: var(--success);\n    border-color: var(--success);\n}\n\n.status-warning {\n    color: var(--warning);\n    border-color: var(--warning);\n}\n\n.status-danger {\n    color: var(--danger);\n    border-color: var(--danger);\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
let mainStyle = css(_templateObject());

function _templateObject3() {
  const data = _taggedTemplateLiteral(["\n            <div ref=\"wrapper\" class=\"polaris-numeric-display__wrapper\">\n                ", "\n            </div>\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = _taggedTemplateLiteral(["\n            <div ref=\"circle\" class=\"poalris-numeric-display__circle ", "\">\n                <div ref=\"display\" class=\"poalris-numeric-display__display ", "\">", "</div>\n            </div>\n            ", "\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  const data = _taggedTemplateLiteral(["\n            <h4 class=\"poalris-numeric-display__title ", "\" ref=\"title\">", "</div>\n        "]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
/**
 * Allowed statuses. Based on Bootstrap colors
 * @see https://getbootstrap.com/docs/4.3/utilities/colors/
 */

const STATUSES = {
  SUCCESS: "success",
  WARNING: "warning",
  DANGER: "danger"
  /**
   * Custom Element for showing numeric data through an injected service.
   * 
   */

};

class PolarisNumericDisplay extends SixphereLitElement {
  /* LIFECYCLE METHODS */
  constructor() {
    super();
    this.title = "";
    this._status = "";
    this._value = null;
    this.min = -Infinity;
    this.max = Infinity;
    this.updateComplete.then(this.onUpdateComplete.bind(this));
  }
  /* STATICS METHODS */


  static get is() {
    return "polaris-numeric-display";
  }

  static get properties() {
    return {
      /**
       * Title to be displayed by the component
       */
      title: {
        type: String
      },

      /**
       * Statuses based on Bootstrap colors
       * @see https://getbootstrap.com/docs/4.3/utilities/colors/
       */
      _status: {
        type: String,
        reflect: true,
        attribute: 'status'
      },

      /**
       * Low data boundary
       */
      min: {
        type: Number
      },

      /**
       * High data boundary
       */
      max: {
        type: Number
      },

      /**
       * Fixed value
       */
      value: {
        type: Number
      }
    };
  }
  /**
   * Services injection method using by Sixphere Dependency Injection Wrapper library.
   * 
   * @see https://www.npmjs.com/package/@sixphere/diwrapper
   * 
   * @param {Service} service Data service. Must implement a getData async method.
   */


  __inject(service) {
    this.service = service;
  }
  /* METHODS */

  /**
   * UpdateComplete event handler.
   */


  onUpdateComplete() {
    var _this = this;

    return _asyncToGenerator(function* () {
      if (!_this.hasService && !_this.value) throw new Error("You must define an attribute value or inject a service for the component [ ".concat(PolarisNumericDisplay.name, " ] before init"));
      if (_this.hasService) yield _this.getData();
      _this.status = _this.calculateStatus(_this.value);
      yield _this.requestUpdate();
    })();
  }
  /**
   * Getting data through the injected service and redering it as HTML
   */


  getData() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      try {
        let response = yield _this2.service.getData();
        _this2.value = response.data;
      } catch (error) {
        _this2.data = _this2.noDataSymbol;
      }
    })();
  }

  calculateStatus(data) {
    if (this.status) return this.status;
    if (this.min <= data && data <= this.max) return STATUSES.SUCCESS;
    return STATUSES.DANGER;
  }
  /* Computed properties */


  get noDataSymbol() {
    return "·";
  }

  get hasService() {
    return typeof this.service === "object" && typeof this.service.getData === "function";
  }

  get status() {
    return this._status;
  }

  set status(status) {
    this._status = status;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
  }
  /* RENDERING */


  static get styles() {
    return [mainStyle];
  }

  renterTitle() {
    return html(_templateObject$1(), this.statusClass(), this.title);
  }

  statusClass() {
    return Object.values(STATUSES).includes(this.status) ? "status-".concat(this.status) : "";
  }

  renderCircle() {
    let title = this.title ? this.renterTitle() : "";
    let status = this.statusClass();
    return html(_templateObject2(), status, status, this.value || this.noDataSymbol, title);
  }

  render() {
    return html(_templateObject3(), this.renderCircle());
  }

}

export { PolarisNumericDisplay };
