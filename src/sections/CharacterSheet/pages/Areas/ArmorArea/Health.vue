<template>
  <div class="health-component">
    <div class="black-box health-bb">
      <label>HP</label>
      <label>Health Points</label>
    </div>
    <div class="h-lg-up black-box">
      <label>Speed</label>
    </div>
    <input type="number"
           class="health-input common-input"
           :value="status.healthPoints"
           @change="changeStatus({healthPoints: $event.target.value * 1})">
    <input type="text"
           class="wounds-input common-input"
           v-model="character.status.wounds">
    <input type="number"
           class="nonlethal-input common-input"
           v-model.number="character.status.nonLethalDamage">
    <input type="text"
           class="speed-input common-input"
           v-model="character.speed">
    <label class="health-label total-label">Total</label>
    <label class="wounds-label">Wounds/Current HP</label>
    <label class="nonlethal-label">Nonlethal<br>Damage</label>
    <label class="speed-label h-md-only">Speed</label>
  </div>
</template>

<script>
import CharacterMixin from 'Store/character.mixin';
import ObjectUtils from 'Utils/object.utils.js';

const BaseDataSource = {
  listeners: {},
  addChangeListener(listener) {
    this.listeners[listener] = listener;
  },
  removeChangeListener(listener) {
    delete this.listeners[listener];
  },
  emmitChange() {
    Object.keys(this.listeners).forEach(key => this.listeners[key]());
  },
  setState(cb) {
    cb(this.state);
    this.emmitChange();
  }
};

const DataSource = Object.assign(BaseDataSource, {
  state: {
    status: {
      healthPoints: 0,
      wounds: 0,
      nonLethalDamage: 0,
      speed: 0
    }
  },
  getStatus() {
    return this.state.status;
  },
  setStatus(status) {
    this.setState(state => {
      ObjectUtils.extractTo(status, state.status);
    });
  }
});

export default {
  mixins: [CharacterMixin],
  data() {
    return {
      status: {
        healthPoints: 0,
        wounds: 0,
        nonLethalDamage: 0,
        speed: 0
      }
    };
  },
  mounted() {
    DataSource.addChangeListener(this.handleChange);
  },
  beforeDestroy() {
    DataSource.removeChangeListener(this.handleChange);
  },
  methods: {
    handleChange() {
      console.log(DataSource.getStatus());
    },
    changeStatus(status) {
      DataSource.setStatus(status);
    }
  }
}
</script>

<style>
.health-component {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
  grid-column-gap: 2px;
}

.health-bb {
  grid-column-end: 3 span;
}

.health-component label {
  font-size: 50%;
  text-transform: uppercase;
  text-align: center;
}

.speed-input {
  text-align: center;
}

@media screen and (min-width: 1024px) {
  .health-component {
    grid-template-columns: 10.6% 4.8% 54.6% repeat(2, 1fr);
    grid-column-gap: 9px;
    grid-template-areas: ". health-label wounds-label nonlethal-label speed-label";
  }

  .health-component input {
    grid-row-start: 2;
  }

  .health-bb {
    grid-column-end: 1 span;
    grid-row-start: 2;
  }

  .health-label {
    grid-area: health-label;
  }

  .wounds-label {
    grid-area: wounds-label;
  }

  .nonlethal-label {
    grid-area: nonlethal-label;
  }

  .speed-label {
    grid-area: speed-label;
  }
}
</style>
