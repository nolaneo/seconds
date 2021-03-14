'use strict';



;define("seconds/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("seconds/app", ["exports", "ember-resolver", "ember-load-initializers", "seconds/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("seconds/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("seconds/components/classifier", ["exports", "@glimmer/component", "seconds/data/words"], function (_exports, _component, _words) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _descriptor, _descriptor2, _descriptor3, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="flex flex-col flex-1 space-y-8" style="min-width: 50%;">
    <div class="text-4xl w-full bg-opacity-50 bg-gray-900 text-white p-6 text-center">
      {{this.word}}
    </div>
    <div
      class="bg-green-500 hover:bg-green-700 text-white font-bold py-6 px-8 rounded text-center cursor-pointer border border-white"
      {{on "click" (fn this.classifyWord this.word 'good')}}
    >
      OK!
    </div>
  
    <div
      class="bg-yellow-300 hover:bg-yellow-600 text-white font-bold py-6 px-8 rounded text-center cursor-pointer border border-white"
      {{on "click" (fn this.classifyWord this.word 'meh')}}
    >
      MEH
    </div>
    <div
      class="bg-red-500 hover:bg-red-700 text-white font-bold py-6 px-8 rounded text-center cursor-pointer border border-white"
      {{on "click" (fn this.classifyWord this.word 'bad')}}
    >
      BAD!
    </div>
    <div class="bg-opacity-50 bg-gray-900 text-white p-6 text-center">
      <p>Good: {{this.results.good}}</p>
      <p>Meh: {{this.results.meh}}</p>
      <p>Bad: {{this.results.bad}}</p>
    </div>
  </div>
  
  {{on-document 'keydown' this.keydown}}
  */
  {
    id: "e71MOtwx",
    block: "{\"symbols\":[],\"statements\":[[9,\"div\",true],[12,\"class\",\"flex flex-col flex-1 space-y-8\",null],[12,\"style\",\"min-width: 50%;\",null],[10],[1,1,0,0,\"\\n  \"],[9,\"div\",true],[12,\"class\",\"text-4xl w-full bg-opacity-50 bg-gray-900 text-white p-6 text-center\",null],[10],[1,1,0,0,\"\\n    \"],[1,0,0,0,[27,[24,0],[\"word\"]]],[1,1,0,0,\"\\n  \"],[11],[1,1,0,0,\"\\n  \"],[9,\"div\",false],[23,\"class\",\"bg-green-500 hover:bg-green-700 text-white font-bold py-6 px-8 rounded text-center cursor-pointer border border-white\",null],[3,0,0,[27,[26,1,\"ModifierHead\"],[]],[\"click\",[31,336,2,[27,[26,0,\"CallHead\"],[]],[[27,[24,0],[\"classifyWord\"]],[27,[24,0],[\"word\"]],\"good\"],null]],null],[10],[1,1,0,0,\"\\n    OK!\\n  \"],[11],[1,1,0,0,\"\\n\\n  \"],[9,\"div\",false],[23,\"class\",\"bg-yellow-300 hover:bg-yellow-600 text-white font-bold py-6 px-8 rounded text-center cursor-pointer border border-white\",null],[3,0,0,[27,[26,1,\"ModifierHead\"],[]],[\"click\",[31,556,2,[27,[26,0,\"CallHead\"],[]],[[27,[24,0],[\"classifyWord\"]],[27,[24,0],[\"word\"]],\"meh\"],null]],null],[10],[1,1,0,0,\"\\n    MEH\\n  \"],[11],[1,1,0,0,\"\\n  \"],[9,\"div\",false],[23,\"class\",\"bg-red-500 hover:bg-red-700 text-white font-bold py-6 px-8 rounded text-center cursor-pointer border border-white\",null],[3,0,0,[27,[26,1,\"ModifierHead\"],[]],[\"click\",[31,768,2,[27,[26,0,\"CallHead\"],[]],[[27,[24,0],[\"classifyWord\"]],[27,[24,0],[\"word\"]],\"bad\"],null]],null],[10],[1,1,0,0,\"\\n    BAD!\\n  \"],[11],[1,1,0,0,\"\\n  \"],[9,\"div\",true],[12,\"class\",\"bg-opacity-50 bg-gray-900 text-white p-6 text-center\",null],[10],[1,1,0,0,\"\\n    \"],[9,\"p\",true],[10],[1,1,0,0,\"Good: \"],[1,0,0,0,[27,[24,0],[\"results\",\"good\"]]],[11],[1,1,0,0,\"\\n    \"],[9,\"p\",true],[10],[1,1,0,0,\"Meh: \"],[1,0,0,0,[27,[24,0],[\"results\",\"meh\"]]],[11],[1,1,0,0,\"\\n    \"],[9,\"p\",true],[10],[1,1,0,0,\"Bad: \"],[1,0,0,0,[27,[24,0],[\"results\",\"bad\"]]],[11],[1,1,0,0,\"\\n  \"],[11],[1,1,0,0,\"\\n\"],[11],[1,1,0,0,\"\\n\\n\"],[1,0,0,0,[31,1031,11,[27,[26,2,\"CallHead\"],[]],[\"keydown\",[27,[24,0],[\"keydown\"]]],null]]],\"hasEval\":false,\"upvars\":[\"fn\",\"on\",\"on-document\"]}",
    meta: {
      moduleName: "seconds/components/classifier.hbs"
    }
  });

  function shuffleArray(input) {
    let array = [...input];

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  let ClassifierComponent = (_dec = Ember._tracked, _dec2 = Ember._tracked, _dec3 = Ember._tracked, _dec4 = Ember._action, _dec5 = Ember._action, (_class = (_temp = class ClassifierComponent extends _component.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "shuffledWords", _descriptor, this);

      _initializerDefineProperty(this, "word", _descriptor2, this);

      _initializerDefineProperty(this, "results", _descriptor3, this);

      this.shuffledWords = shuffleArray(_words.default);
      this.getNewWord();
    }

    getWords(key) {
      return JSON.parse(localStorage.getItem(key)) ?? [];
    }

    setWords(key, words) {
      localStorage.setItem(key, JSON.stringify(words));
    }

    getNewWord() {
      this.word = this.shuffledWords.pop();
    }

    classifyWord(word, classification) {
      console.log('classifyWord');
      Ember.set(this.results, classification, this.results[classification] + 1);
      let items = this.getWords(classification);
      items.push(word);
      this.setWords(classification, items);
      this.getNewWord();
    }

    keydown(event) {
      console.log('keydown', event);
      event.preventDefault();
      event.stopPropagation();

      if (event.key === 'Enter') {
        this.classifyWord(this.word, 'good');
      } else if (event.code === 'Backspace') {
        this.classifyWord(this.word, 'bad');
      } else if (event.code === 'Space') {
        this.classifyWord(this.word, 'meh');
      }
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "shuffledWords", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "word", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "results", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return {
        good: 0,
        bad: 0,
        meh: 0
      };
    }
  }), _applyDecoratedDescriptor(_class.prototype, "classifyWord", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "classifyWord"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "keydown", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "keydown"), _class.prototype)), _class));
  _exports.default = ClassifierComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, ClassifierComponent);
});
;define("seconds/components/game", ["exports", "@glimmer/component", "seconds/data/words", "ember-concurrency-decorators", "ember-concurrency"], function (_exports, _component, _words, _emberConcurrencyDecorators, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{#if this.waiting}}
    <div class="flex flex-col p-4 flex-1 items-center justify-center">
      <div class="flex flex-col space-y-4 items-center">
        <h1 class="text-5xl marker text-white">Player {{inc this.gameService.currentPlayer}}</h1>
        <h1 class="text-2xl text-white">Are you ready?</h1>
        <div
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-6 px-8 rounded text-center cursor-pointer text-2xl border border-white"
          {{on "click" this.ready}}
        >
          Ready!
        </div>
  
        <div class="flex flex-col p-6 rounded bg-opacity-50 bg-gray-900 space-y-4">
          <h1 class="text-2xl text-white">Current scores</h1>
          {{#each this.scores as |score index|}}
            <h1 class="text-xl text-white">Player {{inc index}}: {{score}} points</h1>
          {{/each}}
        </div>
      </div>
    </div>
  
  {{else if this.showScoreSelect}}
    <div class="flex flex-col p-4 flex-1 items-center justify-center">
      <div class="flex flex-col space-y-4">
        <h1 class="text-xl marker text-white text-center">How did you do?</h1>
        {{#each this.card as |item|}}
          <h1 class="text-2xl p-4 text-center rounded w-full bg-opacity-50 bg-gray-900 text-white {{if item.correct 'bg-green-900 bg-opacity-90'}} text-whitew-full" {{on "click" (fn this.toggleScore item)}}>
            {{#if item.correct}}
              ✓
            {{else}}
              ◯
            {{/if}}
            {{item.word}}
          </h1>
        {{/each}}
        <div
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-6 px-8 rounded text-center cursor-pointer border border-white"
          {{on "click" this.addScore}}
        >
          Done!
        </div>
      </div>
    </div>
  {{else}}
    <div class="fixed top-2 right-4" {{on "click" this.toggleMute}}>
      {{#if this.muted}}
        <svg xmlns="http://www.w3.org/2000/svg" class="w-8" viewBox="0 0 384 384"><path d="M288 192c0-38-22-70-53-86v47l52 53 1-14zM341 192c0 20-4 39-11 56l32 33A191 191 0 00235 5v44c61 18 106 75 106 143zM192 21l-45 45 45 45zM27 0L0 27l101 101H0v128h85l107 107V219l91 91c-15 11-31 20-48 25v44c29-7 56-20 78-38l44 43 27-27-192-192L27 0z"/></svg>
      {{else}}
        <svg xmlns="http://www.w3.org/2000/svg" class="w-8" viewBox="0 0 384 384"><path d="M288 192c0-38-22-70-53-86v172c31-16 53-48 53-86zM0 128v128h85l107 107V21L85 128z"/><path d="M235 5v44a149 149 0 010 286v44a192 192 0 000-374z"/></svg>
      {{/if}}
    </div>
    <h1 class="h-3 text-center w-full bg-gray-100 bg-opacity-50 relative rounded-full border border-white overflow-hidden">
      <div class="w-full h-full bg-gray-200 absolute"></div>
      <div class="h-full {{this.bgColor}} absolute countdown" style="width: {{this.remainingTimePercentage}}%"></div>
    </h1>
    <div class="flex flex-col p-4 flex-1 items-center justify-center">
      <div class="flex flex-col space-y-8 items-center ">
        {{#each this.card as |item|}}
          <h1 class="text-2xl p-4 text-center p-4 rounded text-white bg-opacity-50 bg-gray-900 w-full">{{item.word}}</h1>
        {{/each}}
      </div>
    </div>
  {{/if}}
  <audio src="countdown.mp3" muted={{this.muted}} type="audio/mpeg" />
  
  */
  {
    id: "L9vG3tq2",
    block: "{\"symbols\":[\"item\",\"item\",\"score\",\"index\"],\"statements\":[[5,[27,[26,1,\"BlockHead\"],[]],[[27,[24,0],[\"waiting\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[1,1,0,0,\"  \"],[9,\"div\",true],[12,\"class\",\"flex flex-col p-4 flex-1 items-center justify-center\",null],[10],[1,1,0,0,\"\\n    \"],[9,\"div\",true],[12,\"class\",\"flex flex-col space-y-4 items-center\",null],[10],[1,1,0,0,\"\\n      \"],[9,\"h1\",true],[12,\"class\",\"text-5xl marker text-white\",null],[10],[1,1,0,0,\"Player \"],[1,0,0,0,[31,199,3,[27,[26,5,\"CallHead\"],[]],[[27,[24,0],[\"gameService\",\"currentPlayer\"]]],null]],[11],[1,1,0,0,\"\\n      \"],[9,\"h1\",true],[12,\"class\",\"text-2xl text-white\",null],[10],[1,1,0,0,\"Are you ready?\"],[11],[1,1,0,0,\"\\n      \"],[9,\"div\",false],[23,\"class\",\"bg-green-500 hover:bg-green-700 text-white font-bold py-6 px-8 rounded text-center cursor-pointer text-2xl border border-white\",null],[3,0,0,[27,[26,0,\"ModifierHead\"],[]],[\"click\",[27,[24,0],[\"ready\"]]],null],[10],[1,1,0,0,\"\\n        Ready!\\n      \"],[11],[1,1,0,0,\"\\n\\n      \"],[9,\"div\",true],[12,\"class\",\"flex flex-col p-6 rounded bg-opacity-50 bg-gray-900 space-y-4\",null],[10],[1,1,0,0,\"\\n        \"],[9,\"h1\",true],[12,\"class\",\"text-2xl text-white\",null],[10],[1,1,0,0,\"Current scores\"],[11],[1,1,0,0,\"\\n\"],[5,[27,[26,3,\"BlockHead\"],[]],[[31,0,0,[27,[26,2,\"CallHead\"],[]],[[31,0,0,[27,[26,2,\"CallHead\"],[]],[[27,[24,0],[\"scores\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"          \"],[9,\"h1\",true],[12,\"class\",\"text-xl text-white\",null],[10],[1,1,0,0,\"Player \"],[1,0,0,0,[31,763,3,[27,[26,5,\"CallHead\"],[]],[[27,[24,4],[]]],null]],[1,1,0,0,\": \"],[1,0,0,0,[27,[24,3],[]]],[1,1,0,0,\" points\"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[3,4]}]]],[1,1,0,0,\"      \"],[11],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n  \"],[11],[1,1,0,0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[5,[27,[26,1,\"BlockHead\"],[]],[[27,[24,0],[\"showScoreSelect\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[1,1,0,0,\"  \"],[9,\"div\",true],[12,\"class\",\"flex flex-col p-4 flex-1 items-center justify-center\",null],[10],[1,1,0,0,\"\\n    \"],[9,\"div\",true],[12,\"class\",\"flex flex-col space-y-4\",null],[10],[1,1,0,0,\"\\n      \"],[9,\"h1\",true],[12,\"class\",\"text-xl marker text-white text-center\",null],[10],[1,1,0,0,\"How did you do?\"],[11],[1,1,0,0,\"\\n\"],[5,[27,[26,3,\"BlockHead\"],[]],[[31,0,0,[27,[26,2,\"CallHead\"],[]],[[31,0,0,[27,[26,2,\"CallHead\"],[]],[[27,[24,0],[\"card\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"        \"],[9,\"h1\",false],[14,\"class\",[32,[\"text-2xl p-4 text-center rounded w-full bg-opacity-50 bg-gray-900 text-white \",[31,1205,2,[27,[26,1,\"CallHead\"],[]],[[27,[24,2],[\"correct\"]],\"bg-green-900 bg-opacity-90\"],null],\" text-whitew-full\"]],null],[3,0,0,[27,[26,0,\"ModifierHead\"],[]],[\"click\",[31,1284,2,[27,[26,4,\"CallHead\"],[]],[[27,[24,0],[\"toggleScore\"]],[27,[24,2],[]]],null]],null],[10],[1,1,0,0,\"\\n\"],[5,[27,[26,1,\"BlockHead\"],[]],[[27,[24,2],[\"correct\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[1,1,0,0,\"            \u2713\\n\"]],\"parameters\":[]},{\"statements\":[[1,1,0,0,\"            \u25EF\\n\"]],\"parameters\":[]}]]],[1,1,0,0,\"          \"],[1,0,0,0,[27,[24,2],[\"word\"]]],[1,1,0,0,\"\\n        \"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[2]}]]],[1,1,0,0,\"      \"],[9,\"div\",false],[23,\"class\",\"bg-green-500 hover:bg-green-700 text-white font-bold py-6 px-8 rounded text-center cursor-pointer border border-white\",null],[3,0,0,[27,[26,0,\"ModifierHead\"],[]],[\"click\",[27,[24,0],[\"addScore\"]]],null],[10],[1,1,0,0,\"\\n        Done!\\n      \"],[11],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n  \"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[1,1,0,0,\"  \"],[9,\"div\",false],[23,\"class\",\"fixed top-2 right-4\",null],[3,0,0,[27,[26,0,\"ModifierHead\"],[]],[\"click\",[27,[24,0],[\"toggleMute\"]]],null],[10],[1,1,0,0,\"\\n\"],[5,[27,[26,1,\"BlockHead\"],[]],[[27,[24,0],[\"muted\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[1,1,0,0,\"      \"],[9,\"svg\",true],[12,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[12,\"class\",\"w-8\",null],[12,\"viewBox\",\"0 0 384 384\",null],[10],[9,\"path\",true],[12,\"d\",\"M288 192c0-38-22-70-53-86v47l52 53 1-14zM341 192c0 20-4 39-11 56l32 33A191 191 0 00235 5v44c61 18 106 75 106 143zM192 21l-45 45 45 45zM27 0L0 27l101 101H0v128h85l107 107V219l91 91c-15 11-31 20-48 25v44c29-7 56-20 78-38l44 43 27-27-192-192L27 0z\",null],[10],[11],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[1,1,0,0,\"      \"],[9,\"svg\",true],[12,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[12,\"class\",\"w-8\",null],[12,\"viewBox\",\"0 0 384 384\",null],[10],[9,\"path\",true],[12,\"d\",\"M288 192c0-38-22-70-53-86v172c31-16 53-48 53-86zM0 128v128h85l107 107V21L85 128z\",null],[10],[11],[9,\"path\",true],[12,\"d\",\"M235 5v44a149 149 0 010 286v44a192 192 0 000-374z\",null],[10],[11],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]}]]],[1,1,0,0,\"  \"],[11],[1,1,0,0,\"\\n  \"],[9,\"h1\",true],[12,\"class\",\"h-3 text-center w-full bg-gray-100 bg-opacity-50 relative rounded-full border border-white overflow-hidden\",null],[10],[1,1,0,0,\"\\n    \"],[9,\"div\",true],[12,\"class\",\"w-full h-full bg-gray-200 absolute\",null],[10],[11],[1,1,0,0,\"\\n    \"],[9,\"div\",true],[13,\"class\",[32,[\"h-full \",[27,[24,0],[\"bgColor\"]],\" absolute countdown\"]],null],[13,\"style\",[32,[\"width: \",[27,[24,0],[\"remainingTimePercentage\"]],\"%\"]],null],[10],[11],[1,1,0,0,\"\\n  \"],[11],[1,1,0,0,\"\\n  \"],[9,\"div\",true],[12,\"class\",\"flex flex-col p-4 flex-1 items-center justify-center\",null],[10],[1,1,0,0,\"\\n    \"],[9,\"div\",true],[12,\"class\",\"flex flex-col space-y-8 items-center \",null],[10],[1,1,0,0,\"\\n\"],[5,[27,[26,3,\"BlockHead\"],[]],[[31,0,0,[27,[26,2,\"CallHead\"],[]],[[31,0,0,[27,[26,2,\"CallHead\"],[]],[[27,[24,0],[\"card\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"        \"],[9,\"h1\",true],[12,\"class\",\"text-2xl p-4 text-center p-4 rounded text-white bg-opacity-50 bg-gray-900 w-full\",null],[10],[1,0,0,0,[27,[24,1],[\"word\"]]],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[1]}]]],[1,1,0,0,\"    \"],[11],[1,1,0,0,\"\\n  \"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[9,\"audio\",true],[12,\"src\",\"countdown.mp3\",null],[13,\"muted\",[27,[24,0],[\"muted\"]],null],[12,\"type\",\"audio/mpeg\",null],[10],[11],[1,1,0,0,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"on\",\"if\",\"-track-array\",\"each\",\"fn\",\"inc\"]}",
    meta: {
      moduleName: "seconds/components/game.hbs"
    }
  });

  function shuffleArray(input) {
    let array = [...input];

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  let GameComponent = (_dec = Ember.inject.service, _dec2 = Ember._tracked, _dec3 = Ember._tracked, _dec4 = Ember._tracked, _dec5 = Ember._tracked, _dec6 = Ember._tracked, _dec7 = Ember._tracked, _dec8 = Ember._tracked, _dec9 = Ember._tracked, _dec10 = Ember._action, _dec11 = Ember._action, _dec12 = Ember._action, _dec13 = Ember._action, (_class = (_temp = class GameComponent extends _component.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "gameService", _descriptor, this);

      _initializerDefineProperty(this, "shuffledWords", _descriptor2, this);

      _initializerDefineProperty(this, "card", _descriptor3, this);

      _initializerDefineProperty(this, "time", _descriptor4, this);

      _initializerDefineProperty(this, "playerReady", _descriptor5, this);

      _initializerDefineProperty(this, "showScoreSelect", _descriptor6, this);

      _initializerDefineProperty(this, "waiting", _descriptor7, this);

      _initializerDefineProperty(this, "scores", _descriptor8, this);

      _initializerDefineProperty(this, "muted", _descriptor9, this);

      this.shuffledWords = shuffleArray(_words.default);
      this.gameService.currentPlayer = 0;
      this.scores = new Array(this.gameService.numberOfPlayers).fill(0);
      this.waiting = true;
    }

    get remainingTimePercentage() {
      return this.time / 60.0 * 100;
    }

    get bgColor() {
      if (this.time > 15) {
        return 'bg-green-500';
      } else if (this.time > 5) {
        return 'bg-yellow-500';
      } else {
        return 'bg-red-500';
      }
    }

    *countdown() {
      let audio = document.querySelector('audio');

      if (audio) {
        audio.currentTime = 0;
        audio.play();
      }

      for (let i = 60; i > 0; --i) {
        this.time = i;
        yield (0, _emberConcurrency.timeout)(500);
      }

      this.showScoreSelect = true;
    }

    ready() {
      this.card = [];

      for (let i = 0; i < 5 && i < this.shuffledWords.length; ++i) {
        this.card.push({
          word: this.shuffledWords.pop(),
          correct: false
        });
      }

      this.waiting = false;
      this.showScoreSelect = false;
      this.countdown.perform();
    }

    addScore() {
      let score = this.card.filter(card => card.correct).length;
      this.scores[this.gameService.currentPlayer] += score;
      this.nextPlayer();
    }

    toggleScore(item) {
      Ember.set(item, 'correct', !item.correct);
    }

    toggleMute() {
      this.muted = !this.muted;
    }

    nextPlayer() {
      this.gameService.currentPlayer += 1;
      this.gameService.currentPlayer = this.gameService.currentPlayer % this.gameService.numberOfPlayers;
      this.waiting = true;
      this.showScoreSelect = false;
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "gameService", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "shuffledWords", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "card", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "time", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "playerReady", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "showScoreSelect", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "waiting", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "scores", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "muted", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "countdown", [_emberConcurrencyDecorators.task], Object.getOwnPropertyDescriptor(_class.prototype, "countdown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "ready", [_dec10], Object.getOwnPropertyDescriptor(_class.prototype, "ready"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "addScore", [_dec11], Object.getOwnPropertyDescriptor(_class.prototype, "addScore"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleScore", [_dec12], Object.getOwnPropertyDescriptor(_class.prototype, "toggleScore"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleMute", [_dec13], Object.getOwnPropertyDescriptor(_class.prototype, "toggleMute"), _class.prototype)), _class));
  _exports.default = GameComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, GameComponent);
});
;define("seconds/components/player-select", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="flex flex-col p-4 flex-1 items-center justify-center">
    <div class="flex flex-col space-y-4">
      <h1 class="text-xl marker text-white">Choose the number of players</h1>
      <div
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-8 rounded text-center cursor-pointer border border-white"
        {{on "click" (fn this.setPlayers 2)}}
      >
        2 Players
      </div>
      <div
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-6 px-8 rounded text-center cursor-pointer border border-white"
        {{on "click" (fn this.setPlayers 3)}}
      >
        3 Players
      </div>
      <div
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-6 px-8 rounded text-center cursor-pointer border border-white"
        {{on "click" (fn this.setPlayers 4)}}
      >
        4 Players
      </div>
    </div>
  </div>
  */
  {
    id: "0KZBzqtK",
    block: "{\"symbols\":[],\"statements\":[[9,\"div\",true],[12,\"class\",\"flex flex-col p-4 flex-1 items-center justify-center\",null],[10],[1,1,0,0,\"\\n  \"],[9,\"div\",true],[12,\"class\",\"flex flex-col space-y-4\",null],[10],[1,1,0,0,\"\\n    \"],[9,\"h1\",true],[12,\"class\",\"text-xl marker text-white\",null],[10],[1,1,0,0,\"Choose the number of players\"],[11],[1,1,0,0,\"\\n    \"],[9,\"div\",false],[23,\"class\",\"bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-8 rounded text-center cursor-pointer border border-white\",null],[3,0,0,[27,[26,1,\"ModifierHead\"],[]],[\"click\",[31,342,2,[27,[26,0,\"CallHead\"],[]],[[27,[24,0],[\"setPlayers\"]],2],null]],null],[10],[1,1,0,0,\"\\n      2 Players\\n    \"],[11],[1,1,0,0,\"\\n    \"],[9,\"div\",false],[23,\"class\",\"bg-green-500 hover:bg-green-700 text-white font-bold py-6 px-8 rounded text-center cursor-pointer border border-white\",null],[3,0,0,[27,[26,1,\"ModifierHead\"],[]],[\"click\",[31,560,2,[27,[26,0,\"CallHead\"],[]],[[27,[24,0],[\"setPlayers\"]],3],null]],null],[10],[1,1,0,0,\"\\n      3 Players\\n    \"],[11],[1,1,0,0,\"\\n    \"],[9,\"div\",false],[23,\"class\",\"bg-red-500 hover:bg-red-700 text-white font-bold py-6 px-8 rounded text-center cursor-pointer border border-white\",null],[3,0,0,[27,[26,1,\"ModifierHead\"],[]],[\"click\",[31,774,2,[27,[26,0,\"CallHead\"],[]],[[27,[24,0],[\"setPlayers\"]],4],null]],null],[10],[1,1,0,0,\"\\n      4 Players\\n    \"],[11],[1,1,0,0,\"\\n  \"],[11],[1,1,0,0,\"\\n\"],[11]],\"hasEval\":false,\"upvars\":[\"fn\",\"on\"]}",
    meta: {
      moduleName: "seconds/components/player-select.hbs"
    }
  });

  let PlayerSelectComponent = (_dec = Ember.inject.service, _dec2 = Ember.inject.service, _dec3 = Ember._action, (_class = (_temp = class PlayerSelectComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "gameService", _descriptor, this);

      _initializerDefineProperty(this, "router", _descriptor2, this);
    }

    setPlayers(numberOfPlayers) {
      console.log('SET PLAYERS', numberOfPlayers);
      this.gameService.numberOfPlayers = numberOfPlayers;
      this.router.transitionTo('game.in-progress');
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "gameService", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "setPlayers", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "setPlayers"), _class.prototype)), _class));
  _exports.default = PlayerSelectComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, PlayerSelectComponent);
});
;define("seconds/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("seconds/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("seconds/data/words", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = ['10 DOWNING STREET', '101 DALMATIANS', '1916', '20th CENTURY FOX', '2FM', '2PAC', '3', '30 SECONDS', '3ARENA', '50 CENT', '5G', '6TH CLASS', '7', '7 UP', '9/11', '999', 'A CHRISTMAS CAROL', 'A STAR IS BORN', 'AA ROADWATCH', 'ABBA', 'ABERCROMBIE & FITCH', 'ABRAHAM LINCOLN', 'ABRAKEBABRA', 'AC/DC', 'ACHILL ISLAND', 'ACTION MAN', 'ADAM', 'ADAM CLAYTON', 'ADAM SANDLER', 'ADELE', 'ADIDAS', 'ADOLF HITLER', 'ADONIS', 'AER LINGUS', 'AERO', 'AFGHANISTAN', 'AFRICA', 'AGATHA CHRISTIE', 'AGNES BROWN', 'AIDAN GILLEN', 'AIDAN TURNER', 'AIR FORCE ONE', 'AIRBNB', 'AIRTRICITY', 'AL CAPONE', 'AL JAZEERA', 'AL PACINO', 'AL PORTER', 'AL-QAEDA', 'ALADDIN', 'ALAN SUGAR', 'ALBERT EINSTEIN', 'ALBERT SQUARE', 'ALCATRAZ', 'ALCOHOLICS ANONYMOUS', 'ALDI', 'ALEC BALDWIN', "ALEX 'HURRICANE' HIGGINS", 'ALEX FERGUSON', 'ALEXANDER GRAHAM BELL', 'ALFRED HITCHCOCK', 'ALFRED NOBEL', 'ALI G', 'ALICE IN WONDERLAND', 'ALICIA KEYS', 'ALL ABOUT THAT BASS', 'ALL-IRELAND CAMOGIE FINAL', 'ALL-IRELAND LADIES FO0TBALL FINAL', 'ALLIED IRISH BANK', 'AMAL CLOONEY', 'AMAZING GRACE', 'AMAZON PRIME', 'AMAZON.COM', 'AMBRE SOLAIRE', 'AMERICA', 'AMERICAN DAD!', 'AMERICAN EXPRESS', 'AMERICAN IDOL', 'AMHRÁN NA bhFIANN', 'AMNESTY INTERNATIONAL', 'AMSTERDAM', 'AMY HUBERMAN', 'AMY SCHUMER', 'AMY WINEHOUSE', 'AN BORD PLEANÁLA', 'AN GARDA SÍOCHÁNA', 'AN GHAELTACHT', 'AN POST', 'ANDREA BOCELLI', 'ANDREA CORR', 'ANDREW LLOYD WEBBER', 'ANDREX', 'ANDROID', 'ANDY MURRAY', 'ANFIELD', 'ANGELA MERKEL', 'ANGELINA JOLIE', 'ANGELS & DEMONS', 'ANGLO IRISH BANK', 'ANGRY BIRDS', 'ANIMAL PLANET', 'ANNE HATHAWAY', 'ANT AND DEC', 'ANTARCTICA', 'ANTHONY HOPKINS', 'ANTONIO BANDERAS', 'ANTONIO CONTE', 'ANTRIM', 'APOLLO', 'APP STORE', 'APPLE', 'APPLE WATCH', 'APPLEGREEN', "APRIL FOOLS' DAY", 'APRÉS MATCH', 'ARCTIC MONKEYS', "ARDAL O'HANLON", 'ARGENTINA', 'ARGOS', 'ARIANA GRANDE', 'ARISTOTLE', 'ARMAGEDDON', 'ARMAGH', 'ARMANI', 'ARNOLD SCHWARZENEGGER', 'ARSENAL', 'ARTHUR GUINNESS', 'ASCOT', 'ASH WEDNESDAY', 'ASHTON KUTCHER', 'ASIA', 'ASLAN', 'ASTON MARTIN', 'ASTRAZENECA', 'ATHENS', 'ATOMIC KITTEN', 'AUDI', 'AULD LANG SYNE', 'AUSCHWITZ', 'AUSTRALIA', 'AVATAR', 'AVIS', 'AVIVA', 'AVONMORE', 'AWAY IN A MANGER', 'AYERS ROCK', 'B&Q', 'BAA, BAA, BLACK SHEEP', 'BABY ONE MORE TIME', 'BACK TO THE FUTURE', 'BAD BLOOD', 'BAD ROMANCE', 'BAGHDAD', 'BAILE ÁTHA CLIATH', 'BALLYGOWAN', 'BALLYMALOE', 'BALLYMUN KICKHAMS', 'BAMBI', 'BANGKOK', 'BANK HOLIDAY', 'BANK OF IRELAND', 'BARACK OBAMA', 'BARBIE', 'BARBIE AND KEN', 'BARCELONA', 'BARNARDOS', 'BARNEY', 'BARRY McGUIGAN', "BARRY'S TEA", 'BART SIMPSON', 'BASIL FAWLTY', 'BATMAN', 'BATMAN v SUPERMAN', 'BAYERN MUNICH', 'BAYWATCH', 'BAZ ASHMAWY', 'BBC ONE', 'BEAR GRYLLS', 'BEAUTY AND THE BEAST', 'BED OF ROSES', 'BEER PONG', 'BEETHOVEN', 'BELFAST', 'BELIEBERS', 'BELLX1', "BEN & JERRY'S", 'BEN 10', 'BEN AFFLECK', 'BEN STILLER', 'BENEDICT CUMBERBATCH', 'BENETTON', 'BERLIN', 'BERMUDA', 'BERNARD BROGAN', "BERNARD O'SHEA", 'BEST SONG EVER', 'BEVERLY HILLS', 'BEVERLY HILLS COP', 'BEYONCÉ', 'BIG BEN', 'BIG BROTHER', 'BIG MAC', 'BILBO BAGGINS', 'BILL CLINTON', 'BILL GATES', 'BILLY ELLIOT', 'BINGO', 'BIRDS EYE', 'BISHOP BRENNAN', 'BITCOIN', 'BLACK FRIDAY', 'BLACKBERRY', 'BLACKJACK', 'BLADE RUNNER', 'BLAIR WITCH', 'BLARNEY CASTLE', 'BLINDING LIGHTS', 'BLOODY SUNDAY', 'BLOOMSDAY', 'BLUE BLOODS', 'BLUE SUEDE SHOES', 'BLUETOOTH', 'BLURRED LINES', 'BLÁTHNAID NÍ CHOFAIGH', 'BMW', 'BOARDS.IE', 'BOB DYLAN', 'BOB GELDOF', 'BOB MARLEY', 'BOB THE BUILDER', 'BOHEMIAN RHAPSODY', 'BOLLYWOOD', 'BONDI BEACH', 'BONFIRE NIGHT', 'BONNIE AND CLYDE', 'BONO', 'BOOKING.COM', 'BOOTS', 'BORD GÁIS', 'BORD GÁIS ENERGY THEATRE', 'BORD NA MÓNA', 'BORIS JOHNSON', 'BORN IN THE USA', 'BOSCO', 'BOSS BABY', 'BOSTON', 'BOX SET', 'BOY GEORGE', 'BOYZONE', 'BRAD PITT', 'BRADLEY COOPER', 'BRAILLE', 'BRAM STOKER', 'BRAVEHEART', 'BRAZIL', 'BREAKFAST ROLL', 'BREAKING BAD', 'BREAKING DAWN', 'BRENDAN BEHAN', 'BRENDAN GLEESON', 'BRENDAN GRACE', "BRENDAN O'CARROLL", "BRENDAN O'CONNOR", 'BRENNANS BREAD', 'BRESSIE', 'BREXIT', 'BRIAN BORU', 'BRIAN CODY', 'BRIAN DOWLING', 'BRIAN McFADDEN', "BRIAN O'DRISCOLL", 'BRIDGET AND EAMON', 'BRIDGET JONES', 'BRITISH AIRWAYS', 'BRITNEY SPEARS', 'BRITTANY FERRIES', 'BROADWAY', 'BROOKLYN', 'BROOKLYN BECKHAM', 'BROWN THOMAS', 'BRUCE JENNER', 'BRUCE LEE', 'BRUCE SPRINGSTEEN', 'BRUCE WILLIS', 'BRUNO MARS', 'BRUSSELS', 'BRYAN ADAMS', 'BRYAN DOBSON', 'BUCKET LIST', 'BUCKINGHAM PALACE', 'BUDDHA', 'BUDDY HOLLY', 'BUDWEISER', 'BUGS BUNNY', 'BULMERS', 'BURBERRY', 'BURGER KING', 'BUS ÉIREANN', 'BUSHMILLS', 'BUZZ LIGHTYEAR', 'CADBURY', 'CADBURY ROSES', 'CAITLYN JENNER', 'CALIFORNIA', 'CALL OF DUTY', 'CALVIN HARRIS', 'CALVIN KLEIN', 'CAMBRIDGE UNIVERSITY', 'CAMERON DIAZ', "CAN'T STOP THE FEELING", 'CANADA', 'CANDY CRUSH SAGA', 'CAPTAIN AMERICA', 'CAPTAIN BIRDSEYE', 'CAPTAIN HOOK', 'CAPTAIN KIRK', 'CAPTAIN UNDERPANTS', 'CARA DELEVINGNE', 'CARL FRAMPTON', 'CARLOW', 'CARLSBERG', 'CAROLINE WOZNIACKI', 'CARPHONE WAREHOUSE', 'CARPOOL KARAOKE', 'CARRAUNTOOHIL', 'CARRIGSTOWN', 'CARS', 'CARTOON NETWORK', 'CASANOVA', 'CASPER', 'CASTLE ON THE HILL', 'CAT AND MOUSE', 'CATCH-22', 'CATE BLANCHETT', 'CATHERINE ZETA-JONES', 'CATWOMAN', 'CAVAN', 'CCTV', 'CECILIA AHERN', 'CELEBRITY BIG BROTHER', 'CELEBRITY MASTERCHEF', 'CELINE DION', 'CELTIC', 'CENTRA', 'CENTRAL APPLICATIONS OFFICE', 'CENTRAL PARK', 'CHANEL', 'CHANNEL 4', 'CHANNING TATUM', 'CHARADES', 'CHARLES DARWIN', 'CHARLES DICKENS', 'CHARLES STEWART PARNELL', 'CHARLIE AND THE CHOCOLATE FACTORY', 'CHARLIE CHAPLIN', 'CHARLIE HAUGHEY', 'CHARLIE SHEEN', "CHARLIE'S ANGELS", 'CHARLIZE THERON', 'CHEAP THRILLS', 'CHEERS', 'CHELSEA', 'CHELTENHAM', 'CHER', 'CHERYL COLE', 'CHESS', 'CHEWBACCA', 'CHILDLINE', 'CHINA', 'CHINATOWN', 'CHRIS BROWN', 'CHRIS DE BURGH', 'CHRIS EVANS', 'CHRIS HEMSWORTH', "CHRIS O'DOWD", 'CHRIS PRATT', 'CHRIS ROCK', 'CHRISTCHURCH CATHEDRAL', 'CHRISTIAN BALE', 'CHRISTIAN GREY', 'CHRISTINA AGUILERA', 'CHRISTMAS', 'CHRISTMAS DAY', 'CHRISTMAS EVE', 'CHRISTOPHER COLUMBUS', 'CHRISTY DIGNAM', 'CHRISTY MOORE', 'CHRISTY RING', 'CHUCK NORRIS', 'CHUGGERS', 'CHURCH OF SCIENTOLOGY', 'CIDONA', 'CILLIAN MURPHY', 'CINDERELLA', 'CITYJET', 'CIÉ', 'CLAIRE BYRNE', 'CLARE', 'CLARK KENT', 'CLEOPATRA', 'CLIFF RICHARD', 'CLINT EASTWOOD', 'CLONAKILTY BLACK PUDDING', 'CLOUD NINE', 'CLUEDO', 'COCA-COLA', 'COCA-COLA ZERO BIKES', 'COCO CHANEL', 'COCO POPS', 'COKE ZERO', 'COLD WATER', 'COLDPLAY', 'COLIN FARRELL', 'COLIN FIRTH', 'COLLINS BARRACKS', 'COLM MEANEY', 'COLONEL SANDERS', 'COME ON YOU BOYS IN GREEN', 'CONCERN', 'CONKERS', 'CONNACHT', 'CONNEMARA', 'CONOR MURRAY', 'CONOR McGREGOR', 'COOKIE MONSTER', 'COPENHAGEN', 'COPPER FACE JACKS', 'CORK', 'CORK AIRPORT', 'CORK CITY F.C.', 'CORK INSTITUTE OF TECHNOLOGY', 'CORNETTO', 'CORONATION STREET', 'CORONAVIRUS', 'COSMOPOLITAN', 'COSTA COFFEE', 'COSTA DEL SOL', 'COWBOYS AND INDIANS', 'CRAGGY ISLAND', 'CRIMECALL', 'CRIMINAL ASSETS BUREAU', 'CRISTIANO RONALDO', 'CROAGH PATRICK', 'CROCS', 'CROKE PARK', 'CRUELLA De VIL', 'CRUNCHIE', 'CSI', 'CUBA', 'CULCHIE', 'CUPID', 'CURRYS PC WORLD', 'CÚ CHULAINN', "D'UNBELIEVABLES", 'D-DAY', 'D.J. CAREY', 'DAFFY DUCK', 'DAFT PUNK', 'DAFT.IE', 'DAITHÍ Ó SÉ', 'DAKOTA FANNING', 'DAKOTA JOHNSON', 'DAMO & IVOR', 'DANA', 'DANCING QUEEN', 'DANCING WITH THE STARS', 'DANIEL CRAIG', 'DANIEL DAY-LEWIS', "DANIEL O'CONNELL", "DANIEL O'DONNELL", 'DANIEL RADCLIFFE', 'DANNII MINOGUE', 'DANNY BOY', 'DANNY DeVITO', 'DANNY HEALY-RAE', 'DARA Ó BRIAIN', 'DARINA ALLEN', 'DARTH VADER', 'DAVE FANNING', 'DAVID ATTENBOROUGH', 'DAVID BECKHAM', 'DAVID BOWIE', 'DAVID CAMERON', 'DAVID GUETTA', 'DAVID HASSELHOFF', 'DAVID LIVINGSTONE', 'DAVID McWILLIAMS', 'DAVID NORRIS', 'DAVY FITZGERALD', 'DEADPOOL', 'DEAL OR NO DEAL', 'DEAN ROCK', 'DEBENHAMS', 'DELOREAN', "DENIS O'BRIEN", 'DENMARK', 'DENZEL WASHINGTON', 'DEREK MOONEY', 'DERMOT BANNON', 'DERRY', 'DES BISHOP', 'DES CAHILL', 'DESPICABLE ME', 'DIARY OF A WIMPY KID', 'DIE HARD', 'DIEGO MARADONA', 'DIESEL', 'DIET COKE', 'DIET PEPSI', 'DINGLE', 'DIRTY DANCING', 'DISCOVERY CHANNEL', 'DISNEY', 'DISNEY CHANNEL', 'DISNEY ON ICE', 'DISNEY WORLD', 'DISNEYLAND', 'DKNY', "DO THEY KNOW IT'S CHRISTMAS?", 'DOCTOR WHO', 'DOM PÉRIGNON', 'DOMHNALL GLEESON', 'DONAL SKEHAN', 'DONAL ÓG CUSACK', 'DONALD DUCK', 'DONALD TRUMP', 'DONALD TRUMP Jr.', 'DONEDEAL', 'DONEGAL', 'DOOMSDAY', 'DOUBTING THOMAS', 'DOWN', 'DOWN UNDER', 'DOWNTON ABBEY', 'DR. DRE', 'DR. EVA', 'DR. JEKYLL AND MR HYDE', 'DR. MARTENS', 'DR. WATSON', 'DRACULA', "DRAGON'S DEN", 'DRAKE', 'DRAUGHTS', 'DREW BARRYMORE', 'DRIVETIME', 'DROPBOX', 'DUBAI', 'DUBLIN', 'DUBLIN AIRPORT', 'DUBLIN BAY', 'DUBLIN BUS', 'DUBLIN CASTLE', 'DUBLIN CITY MARATHON', 'DUBLIN CITY UNIVERSITY', 'DUBLIN INSTITUTE OF TECHNOLOGY', 'DUBLIN PORT TUNNEL', 'DUBLIN ZOO', "DUFFY'S CIRCUS", 'DUMBO', 'DUNDRUM TOWN CENTRE', 'DUNNES STORES', 'DURACELL', 'DUSTIN HOFFMAN', 'DUSTIN THE TURKEY', 'DWAYNE JOHNSON', 'DYSON', 'DÁIL ÉIREANN', 'E.T.', 'EAMON DE VALERA', 'EAMON DUNPHY', 'EAMONN COUGHLAN', 'EASONS', 'EASTENDERSS', 'EASTER', 'EASTER MONDAY', 'ED SHEERAN', 'EDDIE IZZARD', 'EDDIE MURPHY', 'EDDIE REDMAYNE', "EDDIE ROCKET'S", 'EDWARD CULLEN', 'EENY, MEENY, MINY, MO', 'EGYPT', 'EIR', 'EIR SPORT', 'EIRCODE', 'ELECTRIC IRELAND', 'ELECTRIC PICNIC', 'ELLEN DEGENERES', 'ELLIE GOULDING', 'ELTON JOHN', 'ELVIS PRESLEY', 'EMINEM', 'EMMA STONE', 'EMMA WATSON', 'EMMANUEL MACRON', 'EMMERDALE', 'ARLENE FOSTER', 'ENERGIZER', 'ENGLAND', 'ENYA', 'ER', 'ERIC CLAPTON', 'ERNEST SHACKLETON', 'ESSO', 'ETHAN HAWKE', 'ETIHAD AIRWAYS', 'EUROPE', 'EVA LONGORIA', 'EVA MENDES', 'EVE', 'EVEL KNIEVEL', 'EWAN McGREGOR', 'FACEBOOK', 'FACEBOOK MESSENGER', 'FAIR CITY', 'FAIRY TALE OF NEW YORK', 'FAIRYHOUSE', 'FAME', 'FAMILY GUY', 'FANTA', 'FANTASTIC BEASTS', 'FARGO', 'FARMVILLE', 'FASHIONISTA', 'FAST & FURIOUS', 'FATHER CHRISTMAS', 'FATHER DOUGAL', 'FATHER JACK', 'FATHER TED', "FATHER'S DAY", 'FAWLTY TOWERS', 'FCUK', 'FERMANAGH', 'FERNANDO ALONSO', 'FERRARI', 'FIANNA FAIL', 'FIAT', 'FIFA', 'FIFTH AVENUE', 'FIFTH HARMONY', 'FIFTY SHADES OF GREY', 'FINDING DORY', 'FINDING NEMO', 'FINE GAEL', 'FIONN MAC CUMHAILL', 'FIRST DATES', 'FLAKE', 'FLASH MOB', 'FLEADH CHEOIL', 'FLORA AND FAUNA', 'FLORIDA', 'FLOYD MAYWEATHER', 'FOIL ARMS & HOG', 'FOO FIGHTERS', "FOR HE'S A JOLLY GOOD FELLOW", 'FORD', 'FOREVER 21', 'FORMULA ONE', 'FORREST GUMP', 'FOTA WILDLIFE PARK', 'FRANCE', 'FRANCIS BRENNAN', 'FRANK SINATRA', 'FRANKENSTEIN', 'FRED FLINTSTONE', 'FRED PERRY', 'FREDDIE MERCURY', 'FREDDY KRUEGER', 'FRIDAY THE THIRTEENTH', 'FRIENDS', 'FROZEN', 'FUNGIE', 'FÁILTE IRELAND', 'G.I. JOE', 'GALWAY', 'GALWAY BAY', 'GALWAY GIRL', 'GAME BOY', 'GAME OF THRONES', 'GAMESTOP', 'GANDALF', 'GANDHI', 'GANGNAM STYLE', 'GAP', 'GARDA TRAFFIC CORPS', 'GARETH BALE', 'GARFIELD', 'GARTH BROOKS', "GARY AND PAUL O'DONOVAN", 'GARY BARLOW', 'GARY LINEKER', 'GAY BYRNE', 'GAY PRIDE', 'GENESIS', 'GEORDIE SHORE', 'GEORGE BEST', 'GEORGE CLOONEY', 'GEORGE HOOK', 'GEORGE LUCAS', 'GEORGE MICHAEL', 'GEORGE W. BUSH', 'GEORGIA SALPA', 'GERMANY', 'GERRY ADAMS', 'GET LUCKY', 'GHOSTBUSTERS', 'GIFT GRUB', 'GILLETTE', 'GILLIAN ANDERSON', 'GISELE BÜNDCHEN', 'GLADIATOR', 'GLASGOW', 'GLASNEVIN CEMETERY', 'GLASTONBURY', 'GLEN HANSARD', 'GLENDALOUGH', 'GLOBAL WARMING', 'GMAIL', 'GODZILLA', 'GOGGLEBOX', 'GOLDEN DISCS', 'GOLDILOCKS', 'GOLDILOCKS AND THE THREE BEARS', 'GOLIATH', 'GOLLUM', 'GOOD FRIDAY', 'GOODFELLAS', 'GOOGLE', 'GOOGLE CHROME', 'GOOGLE EARTH', 'GOOGLE MAPS', 'GOOGLE PLAY', 'GOOGLE STREET VIEW', 'GOOGLE+', 'GOOSEBUMPS', 'GORDON RAMSAY', 'GRAEME McDOWELL', 'GRAFTON STREET', 'GRAHAM NORTON', 'GRAND THEFT AUTO', 'GREASE', 'GREECE', 'GREEN DAY', 'GREENLAND', 'GREENPEACE', "GREY'S ANATOMY", 'GRÁINNE SEOIGE', 'GUARDIANS OF THE GALAXY', 'GUINNESS', 'GUINNESS STOREHOUSE', 'GUINNESS WORLD RECORDS', "GUNS 'N ROSES", 'GWYNETH PALTROW', 'GoPRO', 'HAIRSPRAY', 'HALLE BERRY', 'HALLOWEEN', 'HALO', 'HAMLET', 'HANNAH MONTANA', 'HANNIBAL LECTER', 'HANS CHRISTIAN ANDERSEN', 'HANSEL AND GRETEL', 'HAPPY', 'HAPPY BIRTHDAY TO YOU', 'HAPPY MEAL', 'HARDY BUCKS', 'HARE KRISHNA', 'HARLEY-DAVIDSON', 'HARRISON FORD', 'HARRODS', 'HARRY KANE', 'HARRY POTTER', 'HARRY STYLES', 'HARVARD', 'HARVEY NORMAN', 'HAWAIl', 'HBO', 'HEAD & SHOULDERS', 'HEATHROW', 'HEAVEN', 'HECTOR Ó hEOCHAGÁIN', 'HEIDI KLUM', 'HEINEKEN', 'HEINZ', 'HELEN MIRREN', 'HELL', "HELLMAN'S", 'HELLO', 'HELLO!', 'HEN NIGHT', 'HENRY CAVILL', 'HENRY SHEFFLIN', 'HENRY VIII', 'HER.IE', 'HERCULES', 'HERMIONE GRANGER', 'HERTZ', 'HEUSTON STATION', 'HEY JUDE', 'HICKORY, DICKORY, DOCK', 'HIDE AND SEEK', 'HIGH SCHOOL MUSICAL', 'HILL 16', 'HILLARY CLINTON', 'HIPSTER', 'HIROSHIMA', 'HOGWARTS', 'HOLIDAY INN', 'HOLLAND', 'HOLLYOAKS', 'HOLLYWOOD', 'HOLY WATER', 'HOME AND AWAY', 'HOMELAND', 'HOMER SIMPSON', 'HONDA', 'HONG KONG', 'HOPSCOTCH', 'LEVEL FIVE', 'HORSLIPS', 'HOT PRESS', 'HOTEL CALIFORNIA', 'HOTEL TRANSYLVANIA', 'HOTLINE BLING', 'HOUDINI', 'HOUSE OF CARDS', 'HOZIER', 'HUBBA BUBBA', 'HUGH GRANT', 'HUGH JACKMAN', 'HUGH LAURIE', 'HUGO BOSS', 'HULA HOOPS', 'HUMMER', 'HUMPTY DUMPTY', 'HÄAGEN-DAZS', 'I BELIEVE I CAN FLY', "I'M A CELEBRITY...GET ME OUT OF HERE!", 'IAN DEMPSEY', 'IAN McKELLEN', 'IAN PAISLEY', 'IBIZA', 'ICE AGE', 'ICE BUCKET CHALLENGE', 'ICE CUBE', 'IDRIS ELBA', 'IKEA', 'IL DIVO', 'IMELDA MAY', 'IMPRACTICAL JOKERS', 'IN THE NAME OF THE FATHER', 'INCEY WINCEY SPIDER', 'INDEPENDENCE DAY', 'INDIA', 'INDIANA JONES', 'INSOMNIA COFFEE COMPANY', 'INSPECTOR CLOUSEAU', 'INSTAGRAM', 'INTEL IRELAND', 'INTERFLORA', 'INTERNATIONAL RULES SERIES', 'INTERNET EXPLORER', 'INTERPOL', 'INTERRAIL', 'IRAN', 'IRAQ', 'IRELAND', 'IRELAND AM', "IRELAND'S CALL", "IRELAND'S FITTEST FAMILY", "IRELAND'S GOT TALENT", 'IRISH DAILY MAIL', 'IRISH DAILY MIRROR', 'IRISH DAILY STAR', "IRISH FARMERS' ASSOCIATION", 'IRISH FERRIES', 'IRISH GIRL GUIDES', 'IRISH GUIDE DOGS', 'IRISH PRIDE', 'IRISH WATER', 'IRON MAN', 'ISAAC NEWTON', 'ISIS', 'ISRAEL', 'ISTANBUL', "IT'S ALWAYS SUNNY IN PHILADELPHIA", "IT'S RAINING MEN", 'ITALY', 'IVANKA TRUMP', 'J-1 VISA', 'J.K. ROWLING', 'J.R.R. TOLKIEN', 'JACK AND JILL', 'JACK AND THE BEANSTALK', 'JACK BLACK', 'JACK DANIELS', 'JACK FROST', 'JACK NICHOLSON', 'JACK OF ALL TRADES', 'JACK SPARROW', 'JACK THE RIPPER', 'JACKIE CHAN', 'JACKSEPTICEYE', 'JACQUI HURLEY', 'JAGERMEISTER', 'JAGUAR', 'JAKE GYLLENHAAL', 'JAMES BLUNT', 'JAMES BOND', 'JAMES CONNOLLY', 'JAMES CORDEN', 'JAMES DEAN', 'JAMES JOYCE', 'JAMES McAVOY', 'JAMES McCLEAN', 'JAMES NESBITT', 'JAMESON', 'JAMIE DORNAN', 'JAMIE HEASLIP', 'JAMIE OLIVER', 'JANE AUSTEN', 'JANET JACKSON', 'JAPAN', 'JASON BOURNE', 'JASON BYRNE', 'JASON DERULO', 'JASON SHERLOCK', 'JAWS', 'JAY-Z', 'JEAN-CLAUDE VAN DAMME', 'JEDWARD', 'JEEP', 'JENNIFER ANISTON', 'JENNIFER GARNER', 'JENNIFER HUDSON', 'JENNIFER LAWRENCE', 'JENNIFER LOPEZ', 'JENNIFER MAGUIRE', 'JEREMY CLARKSON', 'JEREMY IRONS', 'JEREMY KYLE', 'JERUSALEM', 'JESSICA BIEL', 'JESSIE J', 'JESUS', 'JFK', 'JIM CARREY', 'JIMI HENDRIX', 'JIMMY CARR', 'JIMMY CHOO', 'JIMMY MAGEE', 'JINGLE BELLS', 'JOAN BURTON', 'JOE BROLLY', 'JOE CANNING', 'JOE DOLAN', 'JOE DUFFY', 'JOE SCHMIDT', 'JOE.IE', 'JOHN & EDWARD GRIMES', 'JOHN BISHOP', 'JOHN CLEESE', 'JOHN F. KENNEDY', 'JOHN LENNON', 'JOHN ROCHA', 'JOHN TRAVOLTA', 'JOHNNY DEPP', 'JOHNNY GILES', 'JOHNNY LOGAN', 'JOHNNY SEXTON', 'JOKER', 'JON SNOW', 'JONATHAN RHYS MEYERS', 'JONATHAN ROSS', 'JONATHAN WALTERS', 'JONNY SEXTON', 'JOSE MOURINHO', 'JUDAS', 'JUDE LAW', 'JUDGE JUDY', 'JULIA ROBERTS', 'JULIAN ASSANGE', 'JULIUS CAESAR', 'JUNIOR INFANTS', 'JURASSIC WORLD', 'JURYS INN', 'JUSTIN BIEBER', 'JUSTIN TIMBERLAKE', 'JÜRGEN KLOPP', 'KANYE WEST', 'KARL MARX', 'KATE BECKINSALE', 'KATE HUDSON', 'KATE MIDDLETON', 'KATE MOSS', 'KATE WINSLET', 'KATHRYN THOMAS', 'KATIE PRICE', 'KATIE TAYLOR', 'KATY PERRY', 'KEANU REEVES', 'KEIRA KNIGHTLEY', 'KEITH BARRY', 'KEITH DUFFY', "KELLOGG'S", 'KELLY OSBOURNE', 'KENDALL JENNER', 'KENDRICK LAMAR', 'KENNETH BRANAGH', 'KENYA', 'KERMIT', 'KERRY', 'KERRY KATONA', 'KEVIN BACON', 'KEVIN COSTNER', 'KEVIN DUNDON', 'KEVIN HART', 'KEVIN SPACEY', 'KFC', 'KIAN EGAN', 'KICKSTARTER', 'KILDARE', 'KILDARE VILLAGE', 'KILIMANJARO', 'KILKENNY', 'KILLARNEY', 'KILMAINHAM JAIL', 'KIM KARDASHIAN', 'KINDER SURPRISE', 'KINDLE', 'KING ARTHUR', 'KING KONG', 'KINGS OF LEON', 'KIT KAT', 'KLEENEX', 'KNIGHT RIDER', 'KNOCK', 'KNOCK-KNOCK', 'KODALINE', 'KRISTEN STEWART', 'KURT RUSSELL', 'KYLIE MINOGUE', "L'ORÉAL", 'LA BAMBA', 'LA LA LAND', 'LACOSTE', 'LADY AND THE TRAMP', 'LADY GAGA', 'LANA DEL REY', 'LANCE ARMSTRONG', 'LAND ROVER', 'LANDSDOWNE ROAD', 'LANZAROTE', 'LAOIS', 'LAPLAND', 'LARA CROFT', 'LARRY GOGAN', 'LARRY MULLEN Jr.', 'LAS VEGAS', 'LASSIE', 'LAST CHRISTMAS', 'LAST FRIDAY NIGHT', 'LAURA ASHLEY', 'LAURA WHITMORE', 'LAUREL AND HARDY', 'LAYA HEALTHCARE', 'LEAP CARD', 'LED ZEPPELIN', 'LEE HARVEY OSWALD', 'LEGO', 'LEINSTER', 'LEINSTER HOUSE', 'LEITRIM', 'LENT', 'LEO VARADKAR', 'LEONA LEWIS', 'LEONARDO DA VINCI', 'LEONARDO DiCAPRIO', 'LET IT GO', "LET'S TWIST AGAIN", "LEVI'S", 'LEWIS HAMILTON', 'LIAM BRADY', 'LIAM GALLAGHER', 'LIAM HEMSWORTH', 'LIAM NEESON', 'LIDL', "LILLIE'S BORDELLO", 'LILY ALLEN', 'LIMERICK', 'LINDA MARTIN', 'LINKEDIN', 'LINKIN PARK', 'LIONEL MESSI', 'LIONEL RICHIE', 'LIP SYNC BATTLE', 'LIQUORICE ALLSORTS', 'LISBON', 'LISTOWEL RACES', 'LITTLE JACK HORNER', 'LITTLE MISS MUFFET', 'LITTLE MIX', 'LITTLE RED RIDING HOOD', 'LIVE AT THE MARQUEE', 'LIVELINE', 'LIVERPOOL', 'LIZ HURLEY', 'LOCH NESS', 'LOCTITE', 'LONDON', 'LONGFORD', 'LONGITUDE FESTIVAL', 'LORD HENRY MOUNTCHARLES', 'LORD OF THE DANCE', 'LOS ANGELES', 'LOTTO PLUS', 'LOUGH NEAGH', 'LOUIS WALSH', 'LOURDES', 'LOUTH', 'LOVE ISLAND', 'LOVE/HATE', 'LUCA', 'LUCOZADE', 'LUCY KENNEDY', 'LUDO', 'LUIS SUAREZ', 'LUKE KELLY', 'LUKE SKYWALKER', 'LUXEMBOURG', 'LYNX', 'LYONS TEA', 'LYRIC FM', "M&M'S", 'MACBETH', 'MACE', 'MACKLEMORE', 'MACRA NA FEIRME', 'MAD MAX', "MADAME TUSSAUD'S", 'MADE IN CHELSEA', 'MADONNA', 'MADRID', 'MAEVE BINCHY', 'MAGALUF', 'MAGNUM', 'MAJORCA', 'MALTESERS', 'MAMMA MIA', 'MAN OF STEEL', 'MANCHESTER CITY', 'MANCHESTER UNITED', 'MANHATTAN', 'MARCH 17th', 'MARCO PIERRE WHITE', 'MARGE SIMPSON', 'MARIA SHARAPOVA', 'MARIAH CAREY', 'MARIE ANTOINETTE', 'MARILYN MANSON', 'MARILYN MONROE', 'MARINE LE PEN', 'MARIO ROSENSTOCK', 'MARION FINUCANE', 'MARK WAHLBERG', 'MARK ZUCKERBERG', 'MARKS & SPENCER', 'MARMITE', 'MAROON 5', 'MARS', 'MARTIN LUTHER KING', 'MARTIN McGUINNESS', "MARTIN O'NEILL", 'MARTIN SCORSESE', 'MARTIN SHEEN', 'MARTY MORRISSEY', 'MARTY McFLY', 'MARTY WHELAN', 'MARVEL', 'MARY LOU McDONALD', 'MARY POPPINS', 'MASSEY FERGUSON', 'MASTERCARD', 'MASTERCHEF', 'MATCH OF THE DAY', 'MATT COOPER', 'MATT DAMON', 'MATT LeBLANC', 'MATTHEW McCONAUGHEY', 'MAURA DERRANE', 'MAY DAY', 'MAYO', 'MAZDA', 'MEATH', 'MECCA', 'MEGAN FOX', 'MEL GIBSON', 'MELANIA TRUMP', 'MEN IN BLACK', 'MERCEDES-BENZ', 'MERSEYSIDE', 'MERYL STREEP', 'MET ÉIREANN', 'METEOR', 'MEXICAN WAVE', 'MEXICO', 'MICHAEL BUBLÉ', 'MICHAEL COLLINS', 'MICHAEL D. HIGGINS', 'MICHAEL DOUGLAS', 'MICHAEL FASSBENDER', 'MICHAEL FLATLEY', 'MICHAEL HEALY RAE', 'MICHAEL J. FOX', 'MICHAEL JACKSON', "MICHAEL O'LEARY", 'MICHAEL SCHUMACHER', 'MICHELANGELO', 'MICHELIN STAR', 'MICHELLE OBAMA', 'MICHEÁL MARTIN', 'MICK JAGGER', 'MICK WALLACE', 'MICKEY MOUSE', 'MICROSOFT', 'MICROSOFT WORD', 'MIDDLE-EARTH', 'MIDNIGHT MASS', 'MIKE TYSON', 'MILA KUNIS', 'MILEY CYRUS', 'MILKY WAY', 'MINECRAFT', 'MINI', 'MINIONS', 'MINISTRY OF SOUND', 'MINNIE MOUSE', "MIRIAM O'CALLAGHAN", 'MIRROR MIRROR', 'MISS IRELAND', 'MISS PIGGY', 'MISS UNIVERSE', 'MISS WORLD', 'MISSION: IMPOSSIBLE', 'MNÁ NA hÉIREANN', 'MODERN FAMILY', 'MOLLY MALONE', 'MONAGHAN', 'MONEY MONEY MONEY', 'MONOPOLY', 'MONSTERS UNIVERSITY', 'MONTY PYTHON', 'MOONE BOY', 'MORGAN FREEMAN', 'MORNING IRELAND', 'MOSCOW', 'MOSES', 'MOTHER TERESA', "MOTHER'S DAY", 'MOUNT EVEREST', 'MOUNTJOY PRISON', 'MOVEMBER', 'MOWGLI', 'MR BEAN', 'MR MUSCLE', 'MR RIGHT', 'MR SPOCK', 'MR. MEN', 'MR. TAYTO', "MRS BROWN'S BOYS", 'MRS DOYLE', "MRS. BROWN'S BOYS D'MOVIE", 'MTV', 'MUHAMMAD ALI', 'MUMFORD & SONS', 'MUNSTER', "MURPHY'S LAW", "MURPHY'S STOUT", 'MUSE', 'MUSSOLINI', 'MY LEFT FOOT', 'MY LOVELY HORSE', 'FREE NOW', 'MY WAY', "McDONALD'S", 'MÍCHEÁL Ó MUIRCHEARTAIGH', 'N PLATE', 'NADIA FORDE', 'NAKED ATTRACTION', 'NAMA', 'NAOMI CAMPBELL', 'NAPOLEON', 'NASA', 'NATALIE PORTMAN', 'NATHAN CARTER', 'NATIONAL BOTANIC GARDENS', 'NATIONAL MATERNITY HOSPITAL', 'NATIONAL PLOUGHING CHAMPIONSHIPS', 'NATIONWIDE', 'NEIGHBOURS', 'NEIL ARMSTRONG', 'NEIL DELAMERE', 'NEIL JORDAN', 'NELSON MANDELA', 'NESCAFÉ', 'NESPRESSO', 'NETFLIX', 'NEVEN MAGUIRE', "NEW YEAR'S DAY", "NEW YEAR'S EVE", 'NEW YORK', 'NEW YORK CITY', 'NEW YORK, NEW YORK', 'NEW ZEALAND', 'NEWGRANGE', 'NEWSTALK', 'NEXT', 'NEYMAR', 'NIALL BRESLIN', 'NIALL HORAN', 'NICKELODEON', 'NICKI MINAJ', 'NICKY BYRNE', 'NICOLAS CAGE', 'NICOLE KIDMAN', 'NICORETTE', 'NIDGE', 'NIGEL FARAGE', 'NIGELLA LAWSON', 'NIGERIA', 'NIKE', 'NINTENDO SWITCH', 'NIRVANA', 'NISSAN', 'NIVIA', 'NOAH', "NOAH'S ARK", 'NODDY', 'NOKIA', 'NORTH AMERICA', 'NORTHERN IRELAND', 'NORWAY', 'NOSTRADAMUS', 'NOTRE DAME', 'NOUGHTS AND CROSSES', 'NOVAK DJOKOVIC', "NOW THAT'S WHAT I CALL MUSIC!", 'NOW TV', 'NUACHT', 'NUI GALWAY', "O'CONNELL STREET", "O'NEILLS", 'O.J. SIMPSON', 'OASIS', 'OFFALY', 'OK!', 'OLD MACDONALD HAD A FARM', 'OLD TRAFFORD', 'OLE GUNNAR SOLSKJAER', 'OLIVER CALLAN', 'OLIVER CROMWELL', 'OLIVER TWIST', 'OLIVER!', 'OLLY MURS', 'OLÉ, OLÉ, OLÉ', 'OMNIPLEX CINEMAS', 'ONCE', 'ONCE DANCE', 'ONCE UPON A TIME', 'ONE DIRECTION', 'ONE REPUBLIC', 'ONE4ALL', 'OPEL', 'OPERATION TRANSFORMATION', 'OPRAH WINFREY', 'OPRAH WINFREY', 'ORANGE IS THE NEW BLACK', 'ORLANDO BLOOM', 'OSAMA BIN LADEN', 'OSCAR PISTORIUS', 'OSCAR WILDE', 'OWEN WILSON', 'OXFORD', 'OXFORD DICTIONARY', 'OXFORD UNIVERSITY', 'OXO', 'OZZY OSBOURNE', 'P DIDDY', 'P.J. GALLAGHER', 'PAC-MAN', 'PADDINGTON BEAR', 'PADDY BARNES', 'PADDY POWER', "PADDY'S DAY", 'PADRAIG HARRINGTON', 'PADRAIG PEARSE', 'PAKISTAN', 'PALESTINE', 'PAMELA ANDERSON', 'PANCAKE DAY', 'PANDORA', 'PANTI BLISS', 'PARADISE', 'PARASITE', 'PARIS', 'PARIS HILTON', 'PARK AND RIDE', 'PAT KENNY', 'PAT SHORTT', 'PAT SPILLANE', 'PAT THE BAKER', 'PAUL GALVIN', 'PAUL McCARTNEY', 'PAUL McGINLEY', 'PAUL McGRATH', "PAUL O'CONNELL", 'PAYPAL', 'PEANUTS', 'PEARL HARBOR', 'PEEPING TOM', 'PELÉ', 'PENALTY POINTS', 'PENELOPE CRUZ', 'PENNEYS', 'PEP GUARDIOLA', 'PEPPA PIG', 'PEPSI', 'PEPSI MAX', 'PERISCOPE', 'PETER ANDRE', 'PETER PAN', 'PETER RABBIT', 'PEWDIEPIE', 'PHARRELL WILLIAMS', 'PHIL LYNOTT', 'PHIL MICKELSON', 'PHOTOBOMB', 'PICASSO', 'PICCADILLY CIRCUS', 'PIERCE BROSNAN', 'PIERS MORGAN', 'PILATES', 'PINK', 'PINK FLOYD', 'PINOCCHIO', 'PINTEREST', 'PIPPA MIDDLETON', "PIPPA O'CONNOR", 'PIRATES OF THE CARIBBEAN', 'PIXAR', 'PIXIE GELDOF', 'PLANET OF THE APES', 'PLAYBOY', 'PLAYSTATION', 'PLAYSTATION 5', 'PLUTO', 'PLÁCIDO DOMINGO', 'POCAHONTAS', 'PODGE AND RODGE', 'POKER', 'POKER FACE', 'POKÉMON', 'POKÉMON GO', 'POLAND', 'POLO', 'POPE FRANCIS', 'POPEYE', 'POPPY DAY', 'PORSCHE', 'PORTUGAL', 'POST MALONE', 'POSTMAN PAT', 'POWER RANGERS', 'POWERADE', 'PRADA', 'PRETTY WOMAN', 'PRIME TIME', 'PRINCE', 'PRINCE CHARLES', 'PRINCE CHARMING', 'PRINCE GEORGE', 'PRINCE HARRY', 'PRINCE OF PERSIA', 'PRINCE WILLIAM', 'PRINCESS CHARLOTTE', 'PRINCESS DIANA', 'PRINGLES', 'PRINKS', 'PRISON BREAK', 'PSY', 'PUMA', 'PUNCHESTOWN', 'PURGATORY', 'PYTHAGORAS', 'PÁIDÍ Ó SÉ', 'PÁIRC UÍ CHAOIMH', 'QANTAS', 'QUASIMODO', 'QUE SERA, SERA', 'QUEEN', 'QUEEN ELIZABETH', "QUEEN'S UNIVERSITY BELFAST", 'QUEENS GAMBIT', 'QUENTIN TARANTINO', 'R.E.M.', 'R2-D2', 'RACHEL ALLEN', 'RACHEL WEISZ', 'RADIOHEAD', 'RAFAEL NADAL', 'RAG WEEK', 'RAGLIN ROAD', 'RAIDERS OF THE LOST ARK', 'RAIDIÓ TEILIFÍS ÉIREANN', 'RAMADAN', 'RAMBO', 'RANGE ROVER', 'RANSOMWARE', "RAY D'ARCY", 'REAL MADRID', 'RED BULL', 'RED BULL ZERO', 'RED HOT CHILI PEPPERS', 'RED ROCK', 'RED SQUARE', 'REDDIT', 'REDWATER', 'REESE WITHERSPOON', 'REHAB', 'RENAULT', 'RENEÉ ZELLWEGER', 'RICE KRISPIES', 'RICHARD BRANSON', 'RICHARD GERE', 'RICK GRIMES', 'RICKY GERVAIS', 'RIHANNA', "RING-A-RING O'ROSES", 'RIO DE JANEIRO', 'RIVERDANCE', 'ROAD RUNNER', 'ROALD DAHL', 'ROAR', 'ROB HEFFERNAN', 'ROBBIE BRADY', 'ROBBIE KEANE', 'ROBBIE WILLIAMS', 'ROBERT DE NIRO', 'ROBERT DOWNEY Jr.', 'ROBERT PATTINSON', 'ROBERT SHEEHAN', 'ROBIN HOOD', 'ROBIN WILLIAMS', 'ROBINSON CRUSOE', 'ROBOCOP', 'ROCK, PAPER, SCISSORS', 'ROCKY', 'ROD STEWART', 'RODDY DOYLE', 'ROGER FEDERER', 'ROLEX', 'ROLLING IN THE DEEP', 'ROLLS-ROYCE', 'ROMAN ABRAMOVICH', 'ROME', 'ROMEO AND JULIET', 'RONALD McDONALD', 'RONAN KEATING', 'RONNIE DREW', 'ROOM', 'ROOM TO IMPROVE', 'RORY GALLAGHER', 'RORY MclLROY', 'ROS NA RÚN', 'ROSANNA DAVISON', 'ROSCOMMON', 'ROSS KEMP', "ROSS O'CARROLL-KELLY", 'ROTTEN TOMATOES', 'ROULETTE', 'ROUTE 66', 'ROWAN ATKINSON', 'ROY KEANE', 'ROYAL COLLEGE OF SURGEONS', 'ROZ PURCELL', 'RSVP', 'RTE ONE', 'RTÉ PLAYER', 'RTÉ TWO', "RUBIK'S CUBE", 'RUBY WALSH', 'RUDE TUBE', 'RUDOLPH THE RED-NOSED REINDEER', 'RULES OF THE ROAD', 'RUPERT MURDOCH', 'RUSSELL BRAND', 'RUSSELL CROWE', 'RUSSIA', 'RUSSIAN ROULETTE', 'RUTH NEGGA', 'RYAN GOSLING', 'RYAN REYNOLDS', 'RYAN TUBRIDY', 'RYANAIR', 'S.O.S', 'SACHA BARON COHEN', 'SAINT PATRICK', 'SAINT-TROPEZ', 'SALMA HAYEK', 'SAM MAGUIRE', 'SAM SMITH', 'SAMSON', 'SAMSUNG', 'SAMSUNG GALAXY', 'SAMUEL BECKETT', 'SAMUEL L. JACKSON', 'SAN FRANCISCO', 'SANDRA BULLOCK', 'SANTA CLAUS', 'SANTA PONSA', 'SAOIRSE RONAN', 'SAORVIEW', 'SARAH JESSICA PARKER', 'SAUDl ARABIA', 'SAVING PRIVATE RYAN', 'SCANDINAVIA', 'SCARLETT JOHANSSON', 'SCARY MOVIE', 'SCHWEPPES', 'SCOOBY-DOO', 'SCOTLAND', 'SCOTLAND YARD', 'SCOUTING IRELAND', 'SCRABBLE', 'SCROOGE', 'SEAMUS COLEMAN', 'SEAMUS HEANEY', 'SEAN BEAN', 'SEAN CONNERY', 'SEAN MONCRIEFF', 'SEAN PENN', 'SEANAD ÉIREANN', 'SEBASTIAN VETTEL', 'SEE YOU AGAIN', 'SELENA GOMEZ', 'SELFIE STICK', 'SELLOTAPE', 'SEMPLE STADIUM', 'SERENA WILLIAMS', 'SESAME STREET', 'SEX AND THE CITY', 'SHAKIRA', 'SHAMROCK ROVERS', 'SHANE LONG', 'SHANE LOWRY', 'SHANE McGOWAN', 'SHANE ROSS', 'SHANNON AIRPORT', 'SHAPE OF YOU', 'SHARON CORR', 'SHARON OSBOURNE', 'SHAUN THE SHEEP', 'SHEAMUS', 'SHEERIOS', 'SHELL', 'SHERLOCK HOLMES', 'SHERWOOD FOREST', 'SHREK', 'SIA', 'SIBERIA', 'SICILY', 'SIENNA MILLER', 'SILENCE OF THE LAMBS', 'SILENT NIGHT', 'SILICON VALLEY', 'SIMON COVENEY', 'SIMON COWELL', 'SIMON ZEBO', 'SIMPLY THE BEST', "SINEAD O'CONNOR", 'SING STREET', "SINGIN' IN THE RAIN", 'SINN FEIN', 'SINÉAD DESMOND', 'SKELLIG MICHAEL', 'SKY', 'SKY NEWS', 'SKY SPORTS', 'SKY+', 'SKYPE', 'SKYSCANNER', 'SLANE', 'SLEEPING BEAUTY', 'SLIGO', 'SMARTIES', 'SMYTHS TOYS', 'SNACK BOX', 'SNAKES & LADDERS', 'SNICKERS', 'SNOOP DOGG', 'SNOW PATROL', 'SNOW WHITE', 'SNOW WHITE AND THE SEVEN DWARFS', 'SOMEONE LIKE YOU', "SONIA O'SULLIVAN", 'SONIC THE HEDGEHOG', 'SONY', 'SONY XPERIA', 'SOUTH AFRICA', 'SOUTH AMERICA', 'SOUTH PARK', 'SPAIN', 'SPAR', 'SPECIAL K', 'SPECSAVERS', 'SPECTRE', 'SPEEDO', 'SPEEDY GONZALES', 'SPIDER-MAN', 'SPONGEBOB SQUAREPANTS', 'SPOTIFY', 'SPRITE', 'SPRITE ZERO', 'ST JOHN AMBULANCE', "ST PATRICK'S DAY", "ST STEPHEN'S DAY", "ST STEPHEN'S GREEN", 'ST VINCENT DE PAUL', 'STAG NIGHT', 'STAIRWAY TO HEAVEN', 'STALIN', 'STANSTED', 'STAR TREK', 'STAR WARS', 'STARBUCKS', 'STELLA ARTOIS', 'STEPHEN CLUXTON', 'STEPHEN FRY', 'STEPHEN HAWKING', 'STEPHEN KING', 'STEREOPHONICS', 'STEVE CARELL', 'STEVE JOBS', 'STEVEN GERRARD', 'STEVEN SEAGAL', 'STEVEN SPIELBERG', 'STEVIE WONDER', 'STING', 'STORMZY', 'STRICTLY COME DANCING', 'STRIKING OUT', 'STRIP POKER', 'SUBWAY', 'SUDOKU', 'SUMMER OF 69', 'SUPER MARIO', 'SUPERGIRL', "SUPERMAC'S", 'SUPERMAN', 'SUPERVALU', 'SURVIVOR', 'SUSAN BOYLE', 'SUZUKI', 'SWEDEN', 'SWING LOW, SWEET CHARIOT', 'SWITZERLAND', 'SYDNEY', 'SYLVESTER STALLONE', 'SYRIA', 'SÍLE SEOIGE', 'T.J. REID', 'TABASCO', 'TAKE ME TO CHURCH', 'TAKE THAT', 'TARZAN', 'TARZAN AND JANE', 'TAYLOR LAUTNER', 'TAYLOR SWIFT', 'TAYTO', 'TAYTO PARK', 'TEACTA DÁLA', 'TEDDY BEAR', 'TEENAGE DREAM', 'TELETUBBIES', 'TELLY BINGO', 'TEMPLE BAR', 'TEN GREEN BOTTLES', 'TERRY WOGAN', 'TESCO', 'TEXAS', 'TEXAS HOLDEM', 'TG4', 'THANKSGIVING', 'THE 12 DAYS OF CHRISTMAS', 'THE A-TEAM', 'THE AA', 'THE ACADEMY AWARDS', 'THE ALL BLACKS', 'THE ALL-IRELAND FINAL', 'THE ALPS', 'THE AMAZON', 'THE ANDES', 'THE ANGELUS', 'THE APOSTLES', 'THE APPRENTICE', 'THE ARAN ISLANDS', 'THE ARC DE TRIOMPHE', 'THE ARCTIC CIRCLE', 'THE ARTANE BAND', 'THE ATLANTIC OCEAN', 'THE AVENGERS', 'THE AVIVA STADIUM', 'THE BACKSTREET BOYS', 'THE BANSHEE', 'THE BATMOBILE', 'THE BATTLE OF THE BOYNE', 'THE BBC', 'THE BEACH BOYS', 'THE BEATLES', 'THE BEE GEES', 'THE BERMUDA TRIANGLE', 'THE BFG', 'THE BIBLE', 'THE BIG APPLE', 'THE BIG BAD WOLF', 'THE BIG BANG', 'THE BIG BANG THEORY', 'THE BLACK & TANS', 'THE BLARNEY STONE', 'THE BLUES BROTHERS', 'THE BODY SHOP', 'THE BOGEYMAN', 'THE BOOK OF KELLS', 'THE BOOKIES', 'THE BOOMTOWN RATS', 'THE BORDER', 'THE BOYS IN GREEN', 'THE BRONX', 'THE BURREN', 'THE CANARY ISLANDS', 'THE CATHOLIC CHURCH', 'THE CELTIC SEA', 'THE CELTIC TENORS', 'THE CELTIC TIGER', 'THE CELTS', 'THE CENSUS', 'THE CENTRAL BANK', 'THE CHAINSMOKERS', 'THE CHAMPIONS LEAGUE', 'THE CHAMPS ÉLYSÉES', 'THE CHANNEL TUNNEL', 'THE CHELTENHAM GOLD CUP', 'THE CHIPPENDALES', 'THE CHRISTIAN BROTHERS', 'THE CHURCH OF IRELAND', 'THE CIA', 'THE CIVIL SERVICE', 'THE CIVIL WAR', 'THE CLASH OF THE ASH', 'THE CLIFFS OF MOHER', 'THE CLOUD', 'THE COEN BROTHERS', 'THE COLOSSEUM', 'THE COMMITMENTS', 'THE COMMUNITY GAMES', 'THE CONSTITUTION', 'THE CORK JAZZ FESTIVAL', 'THE CORONAS', 'THE CORRS', 'THE CRANBERRIES', 'THE CREDIT UNION', 'THE CURRAGH', 'THE DA VINCI CODE', 'THE DARK KNIGHT', 'THE DART', 'THE DAWN CHORUS', 'THE DEAD SEA', 'THE DEVIL', 'THE DINGLE DOLPHIN', 'THE DISCIPLES', 'THE DOLE', 'THE DOORS', 'THE DUBLIN HORSE SHOW', 'THE DUBLINERS', 'THE DUBS', 'THE DUKE OF EDINBURGH', 'THE EAGLES', 'THE EARTH', 'THE EASTER BUNNY', 'THE EASTER RISING', 'THE EDGE', 'THE EIFFEL TOWER', 'THE EMERALD ISLE', 'THE EMOJI MOVIE', 'THE EMPIRE STATE BUILDING', 'THE ENGLISH CHANNEL', 'THE EQUATOR', 'THE ESB', 'THE EUROPEAN UNION', 'THE EUROVISION SONG CONTEST', 'THE EVENING HERALD', 'THE FAI', 'THE FAI CUP', 'THE FAMINE', 'THE FAR EAST', 'THE FARMERS JOURNAL', 'THE FBI', 'THE FIELD', 'THE FIELDS OF ATHENRY', 'THE FIFA WORLD CUP', 'THE FINAL COUNTDOWN', 'THE FINANCIAL TIMES', 'THE FIRST LADY', 'THE FIRST WORLD WAR', 'THE FLINTSTONES', 'THE FOUR COURTS', 'THE FRENCH OPEN', 'THE FRENCH RIVIERA', 'THE FULL IRISH', 'THE GAA', 'THE GAA ALLSTARS', 'THE GAIETY THEATRE', 'THE GALWAY RACES', 'THE GARDA COLLEGE', 'THE GARDEN OF EDEN', "THE GIANT'S CAUSEWAY", 'THE GINGERBREAD MAN', 'THE GODFATHER', 'THE GOLDEN GATE BRIDGE', 'THE GOOCH', 'THE GOOD SAMARITAN', 'THE GPO', 'THE GRAHAM NORTON SHOW', 'THE GRAND CANAL', 'THE GRAND CANYON', 'THE GRAND NATIONAL', 'THE GRAND TOUR', 'THE GREAT BARRIER REEF', 'THE GREAT IRISH BAKE OFF', 'THE GREAT WALL OF CHINA', 'THE GREEN ARMY', 'THE GREEN PARTY', 'THE GRESHAM HOTEL', 'THE GUARDS', "THE HA'PENNY BRIDGE", 'THE HANGOVER', 'THE HAPPY PEAR', 'THE HARP', 'THE HEALY-RAES', 'THE HIGHLANDS', 'THE HILL OF TARA', 'THE HIMALAYAS', 'THE HOBBIT', 'THE HOLOCAUST', 'THE HOUSE OF COMMONS', 'THE HSE', 'THE HUFFINGTON POST', 'THE HUNCHBACK OF NOTRE DAME', 'THE HUNGER GAMES', 'THE IFSC', 'THE IFTAS', 'THE INCREDIBLE HULK', 'THE INDIAN OCEAN', 'THE IRA', 'THE IRFU', 'THE IRISH ARMY', 'THE IRISH DERBY', 'THE IRISH EXAMINER', 'THE IRISH INDEPENDENT', 'THE IRISH OPEN', 'THE IRISH SEA', 'THE IRISH TIMES', 'THE ISLE OF MAN', 'THE ISPCA', 'THE ISPCC', 'THE JACK LYNCH TUNNEL', 'THE JEDI', 'THE JOSHUA TREE', 'THE JUNGLE BOOK', 'THE JUNIOR CERT', 'THE KARATE KID', 'THE KARDASHIANS', 'THE KILLERS', 'THE KORAN', 'THE KRAY TWINS', 'THE KU KLUX KLAN', 'THE LABOUR PARTY', 'THE LAD BIBLE', 'THE LATE LATE SHOW', 'THE LATE LATE TOY SHOW', 'THE LEAGUE OF IRELAND', 'THE LEANING TOWER OF PISA', 'THE LEAVING CERT', 'THE LEGO MOVIE', 'THE LIAM McCARTHY CUP', 'THE LIMERICK TUNNEL', 'THE LION KING', 'THE LOCH NESS MONSTER', 'THE LONDON UNDERGROUND', 'THE LORD OF THE RINGS', 'THE LOTTO', 'THE LOUVRE', 'THE LUAS', 'THE M1', 'THE M50', 'THE MAD HATTER', 'THE MAFIA', 'THE MARVELOUS MRS. MAISEL', 'THE MATRIX', 'THE MEDICAL CARD', 'THE MEDITERRANEAN SEA', 'THE MERCHANT OF VENICE', 'THE MIDDLE EAST', 'THE MIDLANDS', 'THE MISSISSIPPI', 'THE MONACO GRAND PRIX', 'THE MUMMY', 'THE MUPPETS', 'THE NATIONAL AQUATIC CENTRE', 'THE NATIONAL LOTTERY', 'THE NAZIS', 'THE NCT', 'THE NETHERLANDS', 'THE NEW TESTAMENT', 'THE NIAGARA FALLS', 'THE NORTH POLE', 'THE NORTH SEA', 'THE NORTHERN HEMISPHERE', 'THE NOTORIOUS', 'THE OFFICE', 'THE OLD TESTAMENT', 'THE OLYMPIC GAMES', 'THE OLYMPIC TORCH', 'THE OSCARS', 'THE OZONE LAYER', 'THE PACIFIC OCEAN', 'THE PEARLY GATES', 'THE PENTAGON', 'THE PHANTOM OF THE OPERA', 'THE PHOENIX PARK', 'THE PIED PIPER', 'THE PINK PANTHER', 'THE POGUES', 'THE POLICE', 'THE POPE', 'THE PREMIER LEAGUE', 'THE PRIESTS', 'THE PRINCE AND THE PAUPER', 'THE PRINCE OF WALES', 'THE PROCLAMATION', 'THE PROPHET MUHAMMAD', 'THE PYRAMIDS', 'THE PYRENEES', 'THE QUEEN MOTHER', 'THE QUEEN VIC', "THE RAY D'ARCY SHOW", 'THE REBEL COUNTY', 'THE RED COW ROUNDABOUT', 'THE RED CROSS', 'THE RED DEVILS', 'THE RED HAND OF ULSTER', 'THE RED SEA', 'THE RESTAURANT', 'THE REVENUE COMMISSIONERS', 'THE RICHTER SCALE', 'THE RING OF KERRY', 'THE TOKYO OLYMPICS', 'THE RITZ', 'THE RIVER LEE', 'THE RIVER LIFFEY', 'THE RIVER NILE', 'THE RIVER SHANNON', 'THE RIVER THAMES', 'THE ROCK', 'THE ROCK OF CASHEL', 'THE ROCKY HORROR PICTURE SHOW', 'THE ROLLING STONES', 'THE ROMAN EEMPIRE', 'THE ROSE OF TRALEE', 'THE ROUND TABLE', 'THE ROYAL CANAL', 'THE ROYAL FAMILY', 'THE RTE GUIDE', 'THE RUBBERBANDITS', 'THE RUGBY WORLD CUP', 'THE RYDER CUP', 'THE SAHARA', 'THE SALMON OF KNOWLEDGE', 'THE SAMARITANS', 'THE SAS', 'THE SAW DOCTORS', 'THE SCRIPT', 'THE SEOIGE SISTERS', 'THE SEVEN WONDERS OF THE WORLD', 'THE SEX PISTOLS', 'THE SHAMROCK', 'THE SHAWSHANK REDEMPTION', 'THE SHELBOURNE HOTEL', 'THE SIMPSONS', 'THE SIMS', 'THE SIX COUNTIES', 'THE SIX NATIONS CHAMPIONSHIP', 'THE SKELLIG ISLANDS', 'THE SLENDER MAN', 'THE SMOKING AREA', 'THE SMURFS', 'THE SOCIAL NETWORK', "THE SOLDIER'S SONG", 'THE SOUND OF MUSIC', 'THE SOUTH POLE', 'THE SOUTHERN HEMISPHERE', 'THE SPECIAL OLYMPICS', 'THE SPHINX', 'THE SPICE GIRLS', 'THE SPIRE', 'THE SPRINGBOKS', 'THE STAR-SPANGLED BANNER', 'THE STARS & STRIPES', 'THE STATE PATHOLOGIST', 'THE STATUE OF LIBERTY', 'THE STIG', 'THE STONE AGE', 'THE STONE ROSES', 'THE STRYPES', 'THE SUN', 'THE SUNDAY BUSINESS POST', 'THE SUNDAY GAME', 'THE SUNDAY TIMES', 'THE SUNDAY WORLD', 'THE SUPER BOWL', 'THE SWISS ALPS', 'THE SYDNEY OPERA HOUSE', 'THE TAJ MAHAL', 'THE TEENAGE MUTANT NINJA TURTLES', 'THE TEN COMMANDMENTS', 'THE TERMINATOR', 'THE THEATRE OF DREAMS', 'THE THIRD WORLD', 'THE THREE LITTLE PIGS', 'THE THREE MUSKETEERS', 'THE THREE WISE MEN', 'THE TITANIC', 'THE TITANIC EXPERIENCE', 'THE TOOTH FAIRY', 'THE TOUR DE FRANCE', 'THE TREATY', 'THE TRICOLOUR', 'THE TUDORS', 'THE TV LICENCE', 'THE TWIN TOWERS', 'THE UGLY DUCKLING', 'THE UNITED KINGDOM', 'THE UNITED NATIONS', 'THE UNITED STATES', 'THE UNIVERSAL SOCIAL CHARGE', 'THE UNIVERSE', 'THE VATICAN', 'THE VHI', 'THE VIRGIN MARY', 'THE WALKING DEAD', 'THE WAR OF INDEPENDENCE', 'THE WATER CHARGE', 'THE WATER COOLER', 'THE WEEKND', 'THE WEST', 'THE WEST END', 'THE WHITE HOUSE', 'THE WILD ROVER', 'THE WILD WEST', 'THE WINTER OLYMPICS', 'THE WIZARD OF OZ', 'THE WOLFE TONES', 'THE WORLD', 'THE WORLD TRADE CENTER', 'THE WORLD WIDE WEB', 'THE X FACTOR', 'THE X-FILES', 'THE YANKS', 'THE YOUNG OFFENDERS', 'THE YOUNG SCIENTIST EXHIBITION', 'THEJOURNAL.IE', 'JOE BIDEN', 'THIN LIZZY', 'THINKING OUT LOUD', 'THOMAS THE TANK ENGINE', 'THOMOND PARK', 'THOR', 'THREE', 'THREE BLIND MICE', 'THRILLER', 'THUNDERBIRDS', 'TIC TAC', 'TICKETMASTER', 'TIDY TOWNS', 'TIESTO', 'TIGER WOODS', 'TIGGER', 'TIK TOK', 'TIME', 'TIMES SQUARE', 'TINA FEY', 'TINDER', 'TIPPERARY', 'TITANIC', 'TK MAXX', 'TOBLERONE', 'TODAY FM', 'TOKYO', 'TOM & JERRY', 'TOM CREAN', 'TOM CRUISE', 'TOM HANKS', 'TOM HARDY', 'TOM HIDDLESTON', 'TOM THUMB', 'TOM, DICK AND HARRY', 'TOMB RAIDER', 'TOMMY HILFIGER', 'TOMMY LEE JONES', 'TOMMY TIERNAN', 'TONY SOPRANO', 'TOP GEAR', 'TOP OF THE POPS', 'TOPAZ', 'TOPMAN', 'TOPSHOP', 'TOWER BRIDGE', 'TOWNIE', 'TOY STORY', 'TOY STORY 3', 'TOYOTA', 'TRAFALGAR SQUARE', 'TRANSFORMERS', 'TRANSITION YEAR', 'TREASURE ISLAND', 'TRINITY COLLEGE DUBLIN', 'TRIP ADVISOR', 'TRIVAGO', 'TRIVIAL PURSUIT', 'TROLLS', 'TRUE DETECTIVE', 'TRUMP TOWER', 'TRÓCAIRE', 'TURKEY', 'TUTANKHAMUN', 'TV3', 'TWICKENHAM', 'TWILIGHT', 'TWINK', 'TWINKLE, TWINKLE, LITTLE STAR', 'TWITCH', 'TWITTER', 'TWO AND A HALF MEN', 'TYRION LANNISTER', 'TYRONE', 'TYSON FURY', 'TÍR NA nÓG', 'U2', 'UBER', 'UFC', 'UFO', 'UGGS', 'UGLY BETTY', 'UKIP', 'ULSTER', 'ULSTER BANK', 'ULYSSES', 'UNICEF', 'UNIVERSITY COLLEGE CORK', 'UNIVERSITY COLLEGE DUBLIN', 'UNIVERSITY OF LIMERICK', 'UPTOWN FUNK', 'USAIN BOLT', 'USHER', 'UTV', "VALENTINE'S DAY", 'VENICE', 'VENUS', 'VENUS WILLIAMS', 'VIBER', 'VICAR STREET', 'VICTORIA BECKHAM', "VICTORIA'S SECRET", 'VIKING SPLASH TOUR', 'VIKINGS', 'VIN DIESEL', 'VINCE VAUGHN', 'VINCENT BROWNE', 'VINCENT VAN GOGH', 'VINE', 'VINNIE JONES', 'VIP', 'VIRGIN', 'VIRGIN ATLANTIC', 'VIRGIN MEDIA', 'VISA', 'VLADIMIR PUTIN', 'VODAFONE', 'VOGUE', 'VOGUE WILLIAMS', 'VOLKSWAGEN', 'VOLKSWAGEN BEETLE', 'VOLVO', 'W.B.YEATS', 'WAGON WHEEL', 'WAGS', 'WALES', 'WALL STREET', 'WALLACE AND GROMIT', 'WALT DISNEY', 'WALTZING MATILDA', 'WANDAVISION', 'WANDERLY WAGON', 'WASHINGTON', 'WATERFORD', 'WATERFORD INSTITUTE OF TECHNOLOGY', 'WATERFORD WHISPERS NEWS', 'WAYNE ROONEY', 'WE ARE THE CHAMPIONS', 'WE WILL ROCK YOU', 'WEETABIX', 'WEIGHT WATCHERS', 'WEMBLEY STADIUM', 'WES HOOLAHAN', 'WESTLIFE', 'WESTMEATH', 'WESTMINSTER', 'WEXFORD', 'WHATSAPP', 'WHISKAS', 'WHISKEY IN THE JAR', 'WHITE CHRISTMAS', 'WHITNEY HOUSTON', 'WHO LET THE DOGS OUT', 'WHO WANTS TO BE A MILLIONAIRE', 'WHOOPI GOLDBERG', 'WHOPPER', 'WI-FI', 'WICKLOW', 'WII', 'WIKILEAKS', 'WIKIPEDIA', 'WILD ATLANTIC WAY', 'WILD THING', 'WILL FERRELL', 'WILL SMITH', 'WILL.I.AM', 'WILLIAM OF ORANGE', 'WILLIAM SHAKESPEARE', "WILLIE O'DEA", 'WILLY WONKA', 'WIMBLEDON', 'WINDOWS', 'WINNIE THE POOH', 'WINNING STREAK', 'WINSTON CHURCHILL', 'WOLVERINE', "WOMEN'S LITTLE CHRISTMAS", 'WONDER WOMAN', "WOODIE'S DIY", 'WOODY', 'WOODY ALLEN', 'WOODY WOODPECKER', 'WOW AIR', 'WRECKING BALL', "WRIGLEY'S", 'WWE', 'X-MEN', 'XBOX SERIES X', 'XPOSE', 'XTRA-VISION', 'YAHOO!', 'YELLOW SUBMARINE', 'YESTERDAY', 'YO-YO', 'YODA', 'YOKO ONO', 'YORKIE', "YOU'LL NEVER WALK ALONE", "YOU'RE BEAUTIFUL", 'YOUTUBE', 'ZAC EFRON', 'ZARA', 'ZAYN', 'ZIG AND ZAG', 'ZIPPO', 'ZLATAN IBRAHIMOVIC', 'ZORRO', 'ZUMBA', 'eBAY', 'iOS', 'iPAD', 'iPHONE', 'iPOD', 'iTUNES', 'ÁRAS AN UACHTARÁIN', 'ÉIRE', 'ŠKODA'];
  _exports.default = _default;
});
;define("seconds/helpers/app-version", ["exports", "seconds/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("seconds/helpers/append", ["exports", "ember-composable-helpers/helpers/append"], function (_exports, _append) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _append.default;
    }
  });
  Object.defineProperty(_exports, "append", {
    enumerable: true,
    get: function () {
      return _append.append;
    }
  });
});
;define("seconds/helpers/call", ["exports", "ember-composable-helpers/helpers/call"], function (_exports, _call) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _call.default;
    }
  });
  Object.defineProperty(_exports, "call", {
    enumerable: true,
    get: function () {
      return _call.call;
    }
  });
});
;define("seconds/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
;define("seconds/helpers/chunk", ["exports", "ember-composable-helpers/helpers/chunk"], function (_exports, _chunk) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _chunk.default;
    }
  });
  Object.defineProperty(_exports, "chunk", {
    enumerable: true,
    get: function () {
      return _chunk.chunk;
    }
  });
});
;define("seconds/helpers/compact", ["exports", "ember-composable-helpers/helpers/compact"], function (_exports, _compact) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _compact.default;
    }
  });
});
;define("seconds/helpers/compute", ["exports", "ember-composable-helpers/helpers/compute"], function (_exports, _compute) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _compute.default;
    }
  });
  Object.defineProperty(_exports, "compute", {
    enumerable: true,
    get: function () {
      return _compute.compute;
    }
  });
});
;define("seconds/helpers/contains", ["exports", "ember-composable-helpers/helpers/contains"], function (_exports, _contains) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _contains.default;
    }
  });
  Object.defineProperty(_exports, "contains", {
    enumerable: true,
    get: function () {
      return _contains.contains;
    }
  });
});
;define("seconds/helpers/dec", ["exports", "ember-composable-helpers/helpers/dec"], function (_exports, _dec) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dec.default;
    }
  });
  Object.defineProperty(_exports, "dec", {
    enumerable: true,
    get: function () {
      return _dec.dec;
    }
  });
});
;define("seconds/helpers/drop", ["exports", "ember-composable-helpers/helpers/drop"], function (_exports, _drop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _drop.default;
    }
  });
});
;define("seconds/helpers/entries", ["exports", "ember-composable-helpers/helpers/entries"], function (_exports, _entries) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _entries.default;
    }
  });
  Object.defineProperty(_exports, "entries", {
    enumerable: true,
    get: function () {
      return _entries.entries;
    }
  });
});
;define("seconds/helpers/filter-by", ["exports", "ember-composable-helpers/helpers/filter-by"], function (_exports, _filterBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _filterBy.default;
    }
  });
});
;define("seconds/helpers/filter", ["exports", "ember-composable-helpers/helpers/filter"], function (_exports, _filter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _filter.default;
    }
  });
});
;define("seconds/helpers/find-by", ["exports", "ember-composable-helpers/helpers/find-by"], function (_exports, _findBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _findBy.default;
    }
  });
});
;define("seconds/helpers/flatten", ["exports", "ember-composable-helpers/helpers/flatten"], function (_exports, _flatten) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _flatten.default;
    }
  });
  Object.defineProperty(_exports, "flatten", {
    enumerable: true,
    get: function () {
      return _flatten.flatten;
    }
  });
});
;define("seconds/helpers/from-entries", ["exports", "ember-composable-helpers/helpers/from-entries"], function (_exports, _fromEntries) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fromEntries.default;
    }
  });
  Object.defineProperty(_exports, "fromEntries", {
    enumerable: true,
    get: function () {
      return _fromEntries.fromEntries;
    }
  });
});
;define("seconds/helpers/group-by", ["exports", "ember-composable-helpers/helpers/group-by"], function (_exports, _groupBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _groupBy.default;
    }
  });
});
;define("seconds/helpers/has-next", ["exports", "ember-composable-helpers/helpers/has-next"], function (_exports, _hasNext) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasNext.default;
    }
  });
  Object.defineProperty(_exports, "hasNext", {
    enumerable: true,
    get: function () {
      return _hasNext.hasNext;
    }
  });
});
;define("seconds/helpers/has-previous", ["exports", "ember-composable-helpers/helpers/has-previous"], function (_exports, _hasPrevious) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasPrevious.default;
    }
  });
  Object.defineProperty(_exports, "hasPrevious", {
    enumerable: true,
    get: function () {
      return _hasPrevious.hasPrevious;
    }
  });
});
;define("seconds/helpers/inc", ["exports", "ember-composable-helpers/helpers/inc"], function (_exports, _inc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inc.default;
    }
  });
  Object.defineProperty(_exports, "inc", {
    enumerable: true,
    get: function () {
      return _inc.inc;
    }
  });
});
;define("seconds/helpers/includes", ["exports", "ember-composable-helpers/helpers/includes"], function (_exports, _includes) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _includes.default;
    }
  });
  Object.defineProperty(_exports, "includes", {
    enumerable: true,
    get: function () {
      return _includes.includes;
    }
  });
});
;define("seconds/helpers/intersect", ["exports", "ember-composable-helpers/helpers/intersect"], function (_exports, _intersect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _intersect.default;
    }
  });
});
;define("seconds/helpers/invoke", ["exports", "ember-composable-helpers/helpers/invoke"], function (_exports, _invoke) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _invoke.default;
    }
  });
  Object.defineProperty(_exports, "invoke", {
    enumerable: true,
    get: function () {
      return _invoke.invoke;
    }
  });
});
;define("seconds/helpers/join", ["exports", "ember-composable-helpers/helpers/join"], function (_exports, _join) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _join.default;
    }
  });
});
;define("seconds/helpers/keys", ["exports", "ember-composable-helpers/helpers/keys"], function (_exports, _keys) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _keys.default;
    }
  });
  Object.defineProperty(_exports, "keys", {
    enumerable: true,
    get: function () {
      return _keys.keys;
    }
  });
});
;define("seconds/helpers/map-by", ["exports", "ember-composable-helpers/helpers/map-by"], function (_exports, _mapBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mapBy.default;
    }
  });
});
;define("seconds/helpers/map", ["exports", "ember-composable-helpers/helpers/map"], function (_exports, _map) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _map.default;
    }
  });
});
;define("seconds/helpers/next", ["exports", "ember-composable-helpers/helpers/next"], function (_exports, _next) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _next.default;
    }
  });
  Object.defineProperty(_exports, "next", {
    enumerable: true,
    get: function () {
      return _next.next;
    }
  });
});
;define("seconds/helpers/noop", ["exports", "ember-composable-helpers/helpers/noop"], function (_exports, _noop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _noop.default;
    }
  });
  Object.defineProperty(_exports, "noop", {
    enumerable: true,
    get: function () {
      return _noop.noop;
    }
  });
});
;define("seconds/helpers/object-at", ["exports", "ember-composable-helpers/helpers/object-at"], function (_exports, _objectAt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _objectAt.default;
    }
  });
  Object.defineProperty(_exports, "objectAt", {
    enumerable: true,
    get: function () {
      return _objectAt.objectAt;
    }
  });
});
;define("seconds/helpers/on-document", ["exports", "ember-on-helper/helpers/on-document"], function (_exports, _onDocument) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onDocument.default;
    }
  });
});
;define("seconds/helpers/on-window", ["exports", "ember-on-helper/helpers/on-window"], function (_exports, _onWindow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onWindow.default;
    }
  });
});
;define("seconds/helpers/on", ["exports", "ember-on-helper/helpers/on"], function (_exports, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _on.default;
    }
  });
});
;define("seconds/helpers/optional", ["exports", "ember-composable-helpers/helpers/optional"], function (_exports, _optional) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _optional.default;
    }
  });
  Object.defineProperty(_exports, "optional", {
    enumerable: true,
    get: function () {
      return _optional.optional;
    }
  });
});
;define("seconds/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
;define("seconds/helpers/pick", ["exports", "ember-composable-helpers/helpers/pick"], function (_exports, _pick) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pick.default;
    }
  });
  Object.defineProperty(_exports, "pick", {
    enumerable: true,
    get: function () {
      return _pick.pick;
    }
  });
});
;define("seconds/helpers/pipe-action", ["exports", "ember-composable-helpers/helpers/pipe-action"], function (_exports, _pipeAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pipeAction.default;
    }
  });
});
;define("seconds/helpers/pipe", ["exports", "ember-composable-helpers/helpers/pipe"], function (_exports, _pipe) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pipe.default;
    }
  });
  Object.defineProperty(_exports, "pipe", {
    enumerable: true,
    get: function () {
      return _pipe.pipe;
    }
  });
});
;define("seconds/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("seconds/helpers/previous", ["exports", "ember-composable-helpers/helpers/previous"], function (_exports, _previous) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _previous.default;
    }
  });
  Object.defineProperty(_exports, "previous", {
    enumerable: true,
    get: function () {
      return _previous.previous;
    }
  });
});
;define("seconds/helpers/queue", ["exports", "ember-composable-helpers/helpers/queue"], function (_exports, _queue) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _queue.default;
    }
  });
  Object.defineProperty(_exports, "queue", {
    enumerable: true,
    get: function () {
      return _queue.queue;
    }
  });
});
;define("seconds/helpers/range", ["exports", "ember-composable-helpers/helpers/range"], function (_exports, _range) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _range.default;
    }
  });
  Object.defineProperty(_exports, "range", {
    enumerable: true,
    get: function () {
      return _range.range;
    }
  });
});
;define("seconds/helpers/reduce", ["exports", "ember-composable-helpers/helpers/reduce"], function (_exports, _reduce) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _reduce.default;
    }
  });
});
;define("seconds/helpers/reject-by", ["exports", "ember-composable-helpers/helpers/reject-by"], function (_exports, _rejectBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rejectBy.default;
    }
  });
});
;define("seconds/helpers/repeat", ["exports", "ember-composable-helpers/helpers/repeat"], function (_exports, _repeat) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _repeat.default;
    }
  });
  Object.defineProperty(_exports, "repeat", {
    enumerable: true,
    get: function () {
      return _repeat.repeat;
    }
  });
});
;define("seconds/helpers/reverse", ["exports", "ember-composable-helpers/helpers/reverse"], function (_exports, _reverse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _reverse.default;
    }
  });
});
;define("seconds/helpers/shuffle", ["exports", "ember-composable-helpers/helpers/shuffle"], function (_exports, _shuffle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _shuffle.default;
    }
  });
  Object.defineProperty(_exports, "shuffle", {
    enumerable: true,
    get: function () {
      return _shuffle.shuffle;
    }
  });
});
;define("seconds/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("seconds/helpers/slice", ["exports", "ember-composable-helpers/helpers/slice"], function (_exports, _slice) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _slice.default;
    }
  });
});
;define("seconds/helpers/sort-by", ["exports", "ember-composable-helpers/helpers/sort-by"], function (_exports, _sortBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sortBy.default;
    }
  });
});
;define("seconds/helpers/take", ["exports", "ember-composable-helpers/helpers/take"], function (_exports, _take) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _take.default;
    }
  });
});
;define("seconds/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
;define("seconds/helpers/toggle-action", ["exports", "ember-composable-helpers/helpers/toggle-action"], function (_exports, _toggleAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggleAction.default;
    }
  });
});
;define("seconds/helpers/toggle", ["exports", "ember-composable-helpers/helpers/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
  Object.defineProperty(_exports, "toggle", {
    enumerable: true,
    get: function () {
      return _toggle.toggle;
    }
  });
});
;define("seconds/helpers/union", ["exports", "ember-composable-helpers/helpers/union"], function (_exports, _union) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _union.default;
    }
  });
});
;define("seconds/helpers/values", ["exports", "ember-composable-helpers/helpers/values"], function (_exports, _values) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _values.default;
    }
  });
  Object.defineProperty(_exports, "values", {
    enumerable: true,
    get: function () {
      return _values.values;
    }
  });
});
;define("seconds/helpers/without", ["exports", "ember-composable-helpers/helpers/without"], function (_exports, _without) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _without.default;
    }
  });
  Object.defineProperty(_exports, "without", {
    enumerable: true,
    get: function () {
      return _without.without;
    }
  });
});
;define("seconds/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "seconds/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("seconds/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("seconds/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("seconds/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("seconds/initializers/export-application-global", ["exports", "seconds/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("seconds/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("seconds/router", ["exports", "seconds/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('game', function () {
      this.route('player-select');
      this.route('in-progress');
    });
    this.route('classifier');
  });
});
;define("seconds/routes/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ApplicationRoute extends Ember.Route {
    beforeModel(transition) {
      if (transition.intent.url == '/') {
        this.transitionTo('game.player-select');
      }
    }

  }

  _exports.default = ApplicationRoute;
});
;define("seconds/routes/classifier", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ClassifierRoute extends Ember.Route {}

  _exports.default = ClassifierRoute;
});
;define("seconds/routes/game/in-progress", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let GameInProgressRoute = (_dec = Ember.inject.service, (_class = (_temp = class GameInProgressRoute extends Ember.Route {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "gameService", _descriptor, this);
    }

    beforeModel() {
      if (isNaN(this.gameService.numberOfPlayers)) {
        this.transitionTo('game.player-select');
      }
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "gameService", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = GameInProgressRoute;
});
;define("seconds/routes/game/player-select", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class GamePlayerSelectRoute extends Ember.Route {}

  _exports.default = GamePlayerSelectRoute;
});
;define("seconds/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("seconds/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("seconds/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("seconds/services/game-service", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let GameServiceService = (_dec = Ember._tracked, (_class = (_temp = class GameServiceService extends Ember.Service {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "numberOfPlayers", undefined);

      _initializerDefineProperty(this, "currentPlayer", _descriptor, this);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "currentPlayer", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return undefined;
    }
  })), _class));
  _exports.default = GameServiceService;
});
;define("seconds/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("seconds/tailwind/config/background-colors", ["exports", "seconds/tailwind/config/colors"], function (_exports, _colors) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Background colors             https://tailwindcss.com/docs/background-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your background colors. By default these use
  | the color palette we defined above, however you're welcome to set
  | these independently if that makes sense for your project.
  |
  | Class name: .bg-{color}
  | CSS property: background-color
  |
  */
  var _default = _colors.default;
  _exports.default = _default;
});
;define("seconds/tailwind/config/background-size", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Background sizes               https://tailwindcss.com/docs/background-size
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your background sizes. We provide some common
  | values that are useful in most projects, but feel free to add other sizes
  | that are specific to your project here as well.
  |
  | Class name: .bg-{size}
  | CSS property: background-size
  |
  */
  var _default = {
    'auto': 'auto',
    'cover': 'cover',
    'contain': 'contain'
  };
  _exports.default = _default;
});
;define("seconds/tailwind/config/border-colors", ["exports", "seconds/tailwind/config/colors"], function (_exports, _colors) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Border colors                     https://tailwindcss.com/docs/border-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border colors. By default these use the
  | color palette we defined above, however you're welcome to set these
  | independently if that makes sense for your project.
  |
  | Take note that border colors require a special "default" value set
  | as well. This is the color that will be used when you do not
  | specify a border color.
  |
  | Class name: .border-{color}
  | CSS property: border-color
  |
  */
  var _default = Object.assign({
    default: _colors.default['grey-light']
  }, _colors.default);

  _exports.default = _default;
});
;define("seconds/tailwind/config/border-radius", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Border radius                    https://tailwindcss.com/docs/border-radius
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border radius values. If a `default` radius
  | is provided, it will be made available as the non-suffixed `.rounded`
  | utility.
  |
  | If your scale includes a `0` value to reset already rounded corners, it's
  | a good idea to put it first so other values are able to override it.
  |
  | Class name: .rounded{-side?}{-size?}
  | CSS property: border-radius
  |
  */
  var _default = {
    'none': '0',
    'sm': '.125rem',
    default: '.25rem',
    'lg': '.5rem',
    'full': '9999px'
  };
  _exports.default = _default;
});
;define("seconds/tailwind/config/border-widths", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Border widths                     https://tailwindcss.com/docs/border-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border widths. Take note that border
  | widths require a special "default" value set as well. This is the
  | width that will be used when you do not specify a border width.
  |
  | Class name: .border{-side?}{-width?}
  | CSS property: border-width
  |
  */
  var _default = {
    default: '1px',
    '0': '0',
    '2': '2px',
    '4': '4px',
    '8': '8px'
  };
  _exports.default = _default;
});
;define("seconds/tailwind/config/colors", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-------------------------------------------------------------------------------
  | Colors                                    https://tailwindcss.com/docs/colors
  |-------------------------------------------------------------------------------
  |
  | Here you can specify the colors used in your project. To get you started,
  | we've provided a generous palette of great looking colors that are perfect
  | for prototyping, but don't hesitate to change them for your project. You
  | own these colors, nothing will break if you change everything about them.
  |
  | We've used literal color names ("red", "blue", etc.) for the default
  | palette, but if you'd rather use functional names like "primary" and
  | "secondary", or even a numeric scale like "100" and "200", go for it.
  |
  */
  var _default = {
    'transparent': 'transparent',
    'black': '#22292f',
    'grey-darkest': '#3d4852',
    'grey-darker': '#606f7b',
    'grey-dark': '#8795a1',
    'grey': '#b8c2cc',
    'grey-light': '#dae1e7',
    'grey-lighter': '#f1f5f8',
    'grey-lightest': '#f8fafc',
    'white': '#ffffff',
    'red-darkest': '#3b0d0c',
    'red-darker': '#621b18',
    'red-dark': '#cc1f1a',
    'red': '#e3342f',
    'red-light': '#ef5753',
    'red-lighter': '#f9acaa',
    'red-lightest': '#fcebea',
    'orange-darkest': '#462a16',
    'orange-darker': '#613b1f',
    'orange-dark': '#de751f',
    'orange': '#f6993f',
    'orange-light': '#faad63',
    'orange-lighter': '#fcd9b6',
    'orange-lightest': '#fff5eb',
    'yellow-darkest': '#453411',
    'yellow-darker': '#684f1d',
    'yellow-dark': '#f2d024',
    'yellow': '#ffed4a',
    'yellow-light': '#fff382',
    'yellow-lighter': '#fff9c2',
    'yellow-lightest': '#fcfbeb',
    'green-darkest': '#0f2f21',
    'green-darker': '#1a4731',
    'green-dark': '#1f9d55',
    'green': '#38c172',
    'green-light': '#51d88a',
    'green-lighter': '#a2f5bf',
    'green-lightest': '#e3fcec',
    'teal-darkest': '#0d3331',
    'teal-darker': '#20504f',
    'teal-dark': '#38a89d',
    'teal': '#4dc0b5',
    'teal-light': '#64d5ca',
    'teal-lighter': '#a0f0ed',
    'teal-lightest': '#e8fffe',
    'blue-darkest': '#12283a',
    'blue-darker': '#1c3d5a',
    'blue-dark': '#2779bd',
    'blue': '#3490dc',
    'blue-light': '#6cb2eb',
    'blue-lighter': '#bcdefa',
    'blue-lightest': '#eff8ff',
    'indigo-darkest': '#191e38',
    'indigo-darker': '#2f365f',
    'indigo-dark': '#5661b3',
    'indigo': '#6574cd',
    'indigo-light': '#7886d7',
    'indigo-lighter': '#b2b7ff',
    'indigo-lightest': '#e6e8ff',
    'purple-darkest': '#21183c',
    'purple-darker': '#382b5f',
    'purple-dark': '#794acf',
    'purple': '#9561e2',
    'purple-light': '#a779e9',
    'purple-lighter': '#d6bbfc',
    'purple-lightest': '#f3ebff',
    'pink-darkest': '#451225',
    'pink-darker': '#6f213f',
    'pink-dark': '#eb5286',
    'pink': '#f66d9b',
    'pink-light': '#fa7ea8',
    'pink-lighter': '#ffbbca',
    'pink-lightest': '#ffebef'
  };
  _exports.default = _default;
});
;define("seconds/tailwind/config/font-weights", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Font weights                       https://tailwindcss.com/docs/font-weight
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your font weights. We've provided a list of
  | common font weight names with their respective numeric scale values
  | to get you started. It's unlikely that your project will require
  | all of these, so we recommend removing those you don't need.
  |
  | Class name: .font-{weight}
  | CSS property: font-weight
  |
  */
  var _default = {
    'hairline': 100,
    'thin': 200,
    'light': 300,
    'normal': 400,
    'medium': 500,
    'semibold': 600,
    'bold': 700,
    'extrabold': 800,
    'black': 900
  };
  _exports.default = _default;
});
;define("seconds/tailwind/config/fonts", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Fonts                                    https://tailwindcss.com/docs/fonts
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your project's font stack, or font families.
  | Keep in mind that Tailwind doesn't actually load any fonts for you.
  | If you're using custom fonts you'll need to import them prior to
  | defining them here.
  |
  | By default we provide a native font stack that works remarkably well on
  | any device or OS you're using, since it just uses the default fonts
  | provided by the platform.
  |
  | Class name: .font-{name}
  | CSS property: font-family
  |
  */
  var _default = {
    'sans': ['system-ui', 'BlinkMacSystemFont', '-apple-system', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
    'serif': ['Constantia', 'Lucida Bright', 'Lucidabright', 'Lucida Serif', 'Lucida', 'DejaVu Serif', 'Bitstream Vera Serif', 'Liberation Serif', 'Georgia', 'serif'],
    'mono': ['Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
  };
  _exports.default = _default;
});
;define("seconds/tailwind/config/height", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Height                                  https://tailwindcss.com/docs/height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your height utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based numeric scale plus some other
  | common use-cases. You can, of course, modify these values as
  | needed.
  |
  | Class name: .h-{size}
  | CSS property: height
  |
  */
  var _default = {
    'auto': 'auto',
    'px': '1px',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '24': '6rem',
    '32': '8rem',
    '48': '12rem',
    '64': '16rem',
    'full': '100%',
    'screen': '100vh'
  };
  _exports.default = _default;
});
;define("seconds/tailwind/config/letter-spacing", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Tracking (letter spacing)       https://tailwindcss.com/docs/letter-spacing
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your letter spacing values, or as we call
  | them in Tailwind, tracking.
  |
  | Class name: .tracking-{size}
  | CSS property: letter-spacing
  |
  */
  var _default = {
    'tight': '-0.05em',
    'normal': '0',
    'wide': '0.05em'
  };
  _exports.default = _default;
});
;define("seconds/tailwind/config/line-height", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Leading (line height)              https://tailwindcss.com/docs/line-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your line height values, or as we call
  | them in Tailwind, leadings.
  |
  | Class name: .leading-{size}
  | CSS property: line-height
  |
  */
  var _default = {
    'none': 1,
    'tight': 1.25,
    'normal': 1.5,
    'loose': 2
  };
  _exports.default = _default;
});
;define("seconds/tailwind/config/margin", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Margin                                  https://tailwindcss.com/docs/margin
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your margin utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default we
  | provide a sensible rem based numeric scale plus a couple other
  | common use-cases like "1px". You can, of course, modify these
  | values as needed.
  |
  | Class name: .m{side?}-{size}
  | CSS property: margin
  |
  */
  var _default = {
    'auto': 'auto',
    'px': '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem'
  };
  _exports.default = _default;
});
;define("seconds/tailwind/config/max-height", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Maximum height                      https://tailwindcss.com/docs/max-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your maximum height utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | couple common use-cases by default. You can, of course, modify
  | these values as needed.
  |
  | Class name: .max-h-{size}
  | CSS property: max-height
  |
  */
  var _default = {
    'full': '100%',
    'screen': '100vh'
  };
  _exports.default = _default;
});
;define("seconds/tailwind/config/max-width", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Maximum width                        https://tailwindcss.com/docs/max-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your maximum width utility sizes. These can
  | be percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based scale and a "full width" size,
  | which is basically a reset utility. You can, of course,
  | modify these values as needed.
  |
  | Class name: .max-w-{size}
  | CSS property: max-width
  |
  */
  var _default = {
    'xs': '20rem',
    'sm': '30rem',
    'md': '40rem',
    'lg': '50rem',
    'xl': '60rem',
    '2xl': '70rem',
    '3xl': '80rem',
    '4xl': '90rem',
    '5xl': '100rem',
    'full': '100%'
  };
  _exports.default = _default;
});
;define("seconds/tailwind/config/min-height", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Minimum height                      https://tailwindcss.com/docs/min-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your minimum height utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | few common use-cases by default. You can, of course, modify these
  | values as needed.
  |
  | Class name: .min-h-{size}
  | CSS property: min-height
  |
  */
  var _default = {
    '0': '0',
    'full': '100%',
    'screen': '100vh'
  };
  _exports.default = _default;
});
;define("seconds/tailwind/config/min-width", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Minimum width                        https://tailwindcss.com/docs/min-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your minimum width utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | couple common use-cases by default. You can, of course, modify
  | these values as needed.
  |
  | Class name: .min-w-{size}
  | CSS property: min-width
  |
  */
  var _default = {
    '0': '0',
    'full': '100%'
  };
  _exports.default = _default;
});
;define("seconds/tailwind/config/negative-margin", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Negative margin                https://tailwindcss.com/docs/negative-margin
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your negative margin utility sizes. These can
  | be percentage based, pixels, rems, or any other units. By default we
  | provide matching values to the padding scale since these utilities
  | generally get used together. You can, of course, modify these
  | values as needed.
  |
  | Class name: .-m{side?}-{size}
  | CSS property: margin
  |
  */
  var _default = {
    'px': '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem'
  };
  _exports.default = _default;
});
;define("seconds/tailwind/config/opacity", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Opacity                                https://tailwindcss.com/docs/opacity
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your opacity utility values. By default we
  | provide a sensible numeric scale. You can, of course, modify these
  | values as needed.
  |
  | Class name: .opacity-{name}
  | CSS property: opacity
  |
  */
  var _default = {
    '0': '0',
    '25': '.25',
    '50': '.5',
    '75': '.75',
    '100': '1'
  };
  _exports.default = _default;
});
;define("seconds/tailwind/config/padding", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Padding                                https://tailwindcss.com/docs/padding
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your padding utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default we
  | provide a sensible rem based numeric scale plus a couple other
  | common use-cases like "1px". You can, of course, modify these
  | values as needed.
  |
  | Class name: .p{side?}-{size}
  | CSS property: padding
  |
  */
  var _default = {
    'px': '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem'
  };
  _exports.default = _default;
});
;define("seconds/tailwind/config/screens", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Screens                      https://tailwindcss.com/docs/responsive-design
  |-----------------------------------------------------------------------------
  |
  | Screens in Tailwind are translated to CSS media queries. They define the
  | responsive breakpoints for your project. By default Tailwind takes a
  | "mobile first" approach, where each screen size represents a minimum
  | viewport width. Feel free to have as few or as many screens as you
  | want, naming them in whatever way you'd prefer for your project.
  |
  | Tailwind also allows for more complex screen definitions, which can be
  | useful in certain situations. Be sure to see the full responsive
  | documentation for a complete list of options.
  |
  | Class name: .{screen}:{utility}
  |
  */
  var _default = {
    'sm': '576px',
    'md': '768px',
    'lg': '992px',
    'xl': '1200px'
  };
  _exports.default = _default;
});
;define("seconds/tailwind/config/shadows", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Shadows                                https://tailwindcss.com/docs/shadows
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your shadow utilities. As you can see from
  | the defaults we provide, it's possible to apply multiple shadows
  | per utility using comma separation.
  |
  | If a `default` shadow is provided, it will be made available as the non-
  | suffixed `.shadow` utility.
  |
  | Class name: .shadow-{size?}
  | CSS property: box-shadow
  |
  */
  var _default = {
    default: '0 2px 4px 0 rgba(0,0,0,0.10)',
    'md': '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
    'lg': '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
    'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    'outline': '0 0 0 3px rgba(52,144,220,0.5)',
    'none': 'none'
  };
  _exports.default = _default;
});
;define("seconds/tailwind/config/svg-fill", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | SVG fill                                   https://tailwindcss.com/docs/svg
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your SVG fill colors. By default we just provide
  | `fill-current` which sets the fill to the current text color. This lets you
  | specify a fill color using existing text color utilities and helps keep the
  | generated CSS file size down.
  |
  | Class name: .fill-{name}
  | CSS property: fill
  |
  */
  var _default = {
    'current': 'currentColor'
  };
  _exports.default = _default;
});
;define("seconds/tailwind/config/svg-stroke", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | SVG stroke                                 https://tailwindcss.com/docs/svg
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your SVG stroke colors. By default we just provide
  | `stroke-current` which sets the stroke to the current text color. This lets
  | you specify a stroke color using existing text color utilities and helps
  | keep the generated CSS file size down.
  |
  | Class name: .stroke-{name}
  | CSS property: stroke
  |
  */
  var _default = {
    'current': 'currentColor'
  };
  _exports.default = _default;
});
;define("seconds/tailwind/config/tailwind", ["exports", "tailwindcss/plugins/container", "seconds/tailwind/config/colors", "seconds/tailwind/config/screens", "seconds/tailwind/config/fonts", "seconds/tailwind/config/text-sizes", "seconds/tailwind/config/font-weights", "seconds/tailwind/config/line-height", "seconds/tailwind/config/letter-spacing", "seconds/tailwind/config/text-colors", "seconds/tailwind/config/background-colors", "seconds/tailwind/config/background-size", "seconds/tailwind/config/border-widths", "seconds/tailwind/config/border-colors", "seconds/tailwind/config/border-radius", "seconds/tailwind/config/width", "seconds/tailwind/config/height", "seconds/tailwind/config/min-width", "seconds/tailwind/config/min-height", "seconds/tailwind/config/max-width", "seconds/tailwind/config/max-height", "seconds/tailwind/config/padding", "seconds/tailwind/config/margin", "seconds/tailwind/config/negative-margin", "seconds/tailwind/config/shadows", "seconds/tailwind/config/z-index", "seconds/tailwind/config/opacity", "seconds/tailwind/config/svg-fill", "seconds/tailwind/config/svg-stroke"], function (_exports, _container, _colors, _screens, _fonts, _textSizes, _fontWeights, _lineHeight, _letterSpacing, _textColors, _backgroundColors, _backgroundSize, _borderWidths, _borderColors, _borderRadius, _width, _height, _minWidth, _minHeight, _maxWidth, _maxHeight, _padding, _margin, _negativeMargin, _shadows, _zIndex, _opacity, _svgFill, _svgStroke) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    colors: _colors.default,
    screens: _screens.default,
    fonts: _fonts.default,
    textSizes: _textSizes.default,
    fontWeights: _fontWeights.default,
    leading: _lineHeight.default,
    tracking: _letterSpacing.default,
    textColors: _textColors.default,
    backgroundColors: _backgroundColors.default,
    backgroundSize: _backgroundSize.default,
    borderWidths: _borderWidths.default,
    borderColors: _borderColors.default,
    borderRadius: _borderRadius.default,
    width: _width.default,
    height: _height.default,
    minWidth: _minWidth.default,
    minHeight: _minHeight.default,
    maxWidth: _maxWidth.default,
    maxHeight: _maxHeight.default,
    padding: _padding.default,
    margin: _margin.default,
    negativeMargin: _negativeMargin.default,
    shadows: _shadows.default,
    zIndex: _zIndex.default,
    opacity: _opacity.default,
    svgFill: _svgFill.default,
    svgStroke: _svgStroke.default,

    /*
    |-----------------------------------------------------------------------------
    | Modules                  https://tailwindcss.com/docs/configuration#modules
    |-----------------------------------------------------------------------------
    |
    | Here is where you control which modules are generated and what variants are
    | generated for each of those modules.
    |
    | Currently supported variants:
    |   - responsive
    |   - hover
    |   - focus
    |   - focus-within
    |   - active
    |   - group-hover
    |
    | To disable a module completely, use `false` instead of an array.
    |
    */
    modules: {
      appearance: ['responsive'],
      backgroundAttachment: ['responsive'],
      backgroundColors: ['responsive', 'hover', 'focus'],
      backgroundPosition: ['responsive'],
      backgroundRepeat: ['responsive'],
      backgroundSize: ['responsive'],
      borderCollapse: [],
      borderColors: ['responsive', 'hover', 'focus'],
      borderRadius: ['responsive'],
      borderStyle: ['responsive'],
      borderWidths: ['responsive'],
      cursor: ['responsive'],
      display: ['responsive'],
      flexbox: ['responsive'],
      float: ['responsive'],
      fonts: ['responsive'],
      fontWeights: ['responsive', 'hover', 'focus'],
      height: ['responsive'],
      leading: ['responsive'],
      lists: ['responsive'],
      margin: ['responsive'],
      maxHeight: ['responsive'],
      maxWidth: ['responsive'],
      minHeight: ['responsive'],
      minWidth: ['responsive'],
      negativeMargin: ['responsive'],
      objectFit: false,
      objectPosition: false,
      opacity: ['responsive'],
      outline: ['focus'],
      overflow: ['responsive'],
      padding: ['responsive'],
      pointerEvents: ['responsive'],
      position: ['responsive'],
      resize: ['responsive'],
      shadows: ['responsive', 'hover', 'focus'],
      svgFill: [],
      svgStroke: [],
      tableLayout: ['responsive'],
      textAlign: ['responsive'],
      textColors: ['responsive', 'hover', 'focus'],
      textSizes: ['responsive'],
      textStyle: ['responsive', 'hover', 'focus'],
      tracking: ['responsive'],
      userSelect: ['responsive'],
      verticalAlign: ['responsive'],
      visibility: ['responsive'],
      whitespace: ['responsive'],
      width: ['responsive'],
      zIndex: ['responsive']
    },

    /*
    |-----------------------------------------------------------------------------
    | Plugins                                https://tailwindcss.com/docs/plugins
    |-----------------------------------------------------------------------------
    |
    | Here is where you can register any plugins you'd like to use in your
    | project. Tailwind's built-in `container` plugin is enabled by default to
    | give you a Bootstrap-style responsive container component out of the box.
    |
    | Be sure to view the complete plugin documentation to learn more about how
    | the plugin system works.
    |
    */
    plugins: [(0, _container.default)({// center: true,
      // padding: '1rem',
    })],

    /*
    |-----------------------------------------------------------------------------
    | Advanced Options         https://tailwindcss.com/docs/configuration#options
    |-----------------------------------------------------------------------------
    |
    | Here is where you can tweak advanced configuration options. We recommend
    | leaving these options alone unless you absolutely need to change them.
    |
    */
    options: {
      prefix: '',
      important: false,
      separator: ':'
    }
  };
  _exports.default = _default;
});
;define("seconds/tailwind/config/text-colors", ["exports", "seconds/tailwind/config/colors"], function (_exports, _colors) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Text colors                         https://tailwindcss.com/docs/text-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your text colors. By default these use the
  | color palette we defined above, however you're welcome to set these
  | independently if that makes sense for your project.
  |
  | Class name: .text-{color}
  | CSS property: color
  |
  */
  var _default = _colors.default;
  _exports.default = _default;
});
;define("seconds/tailwind/config/text-sizes", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Text sizes                         https://tailwindcss.com/docs/text-sizing
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your text sizes. Name these in whatever way
  | makes the most sense to you. We use size names by default, but
  | you're welcome to use a numeric scale or even something else
  | entirely.
  |
  | By default Tailwind uses the "rem" unit type for most measurements.
  | This allows you to set a root font size which all other sizes are
  | then based on. That said, you are free to use whatever units you
  | prefer, be it rems, ems, pixels or other.
  |
  | Class name: .text-{size}
  | CSS property: font-size
  |
  */
  var _default = {
    'xs': '.75rem',
    // 12px
    'sm': '.875rem',
    // 14px
    'base': '1rem',
    // 16px
    'lg': '1.125rem',
    // 18px
    'xl': '1.25rem',
    // 20px
    '2xl': '1.5rem',
    // 24px
    '3xl': '1.875rem',
    // 30px
    '4xl': '2.25rem',
    // 36px
    '5xl': '3rem' // 48px

  };
  _exports.default = _default;
});
;define("seconds/tailwind/config/width", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Width                                    https://tailwindcss.com/docs/width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your width utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based numeric scale, a percentage
  | based fraction scale, plus some other common use-cases. You
  | can, of course, modify these values as needed.
  |
  |
  | It's also worth mentioning that Tailwind automatically escapes
  | invalid CSS class name characters, which allows you to have
  | awesome classes like .w-2/3.
  |
  | Class name: .w-{size}
  | CSS property: width
  |
  */
  var _default = {
    'auto': 'auto',
    'px': '1px',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '24': '6rem',
    '32': '8rem',
    '48': '12rem',
    '64': '16rem',
    '1/2': '50%',
    '1/3': '33.33333%',
    '2/3': '66.66667%',
    '1/4': '25%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.66667%',
    '5/6': '83.33333%',
    'full': '100%',
    'screen': '100vw'
  };
  _exports.default = _default;
});
;define("seconds/tailwind/config/z-index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Z-index                                https://tailwindcss.com/docs/z-index
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your z-index utility values. By default we
  | provide a sensible numeric scale. You can, of course, modify these
  | values as needed.
  |
  | Class name: .z-{index}
  | CSS property: z-index
  |
  */
  var _default = {
    'auto': 'auto',
    '0': 0,
    '10': 10,
    '20': 20,
    '30': 30,
    '40': 40,
    '50': 50
  };
  _exports.default = _default;
});
;define("seconds/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ourMUUMG",
    "block": "{\"symbols\":[],\"statements\":[[9,\"div\",true],[12,\"class\",\"min-h-screen min-w-screen bg-gray-100 flex flex-1 flex-col space-y-4 p-6 items-center main-bg\",null],[10],[1,1,0,0,\"\\n  \"],[9,\"h1\",true],[12,\"class\",\"text-4xl marker orange-outline\",null],[10],[1,1,0,0,\"SECONDS!\"],[11],[1,1,0,0,\"\\n  \"],[1,0,0,0,[31,0,0,[27,[26,1,\"CallHead\"],[]],[[31,0,0,[27,[26,0,\"CallHead\"],[]],null,null]],null]],[1,1,0,0,\"\\n\"],[11],[1,1,0,0,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "seconds/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("seconds/templates/classifier", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "wPjTurJJ",
    "block": "{\"symbols\":[],\"statements\":[[7,\"classifier\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "seconds/templates/classifier.hbs"
    }
  });

  _exports.default = _default;
});
;define("seconds/templates/game/in-progress", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "AeYEm/1d",
    "block": "{\"symbols\":[],\"statements\":[[7,\"game\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "seconds/templates/game/in-progress.hbs"
    }
  });

  _exports.default = _default;
});
;define("seconds/templates/game/player-select", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "swpq32m5",
    "block": "{\"symbols\":[],\"statements\":[[7,\"player-select\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "seconds/templates/game/player-select.hbs"
    }
  });

  _exports.default = _default;
});
;define("seconds/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("seconds/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("seconds/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("seconds/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('seconds/config/environment', [], function() {
  var prefix = 'seconds';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("seconds/app")["default"].create({"name":"seconds","version":"0.0.0+0edea5e9"});
          }
        
//# sourceMappingURL=seconds.map
