<template>
  <div class="accordion" role="tablist">
    <BCard no-body class="mb-1">
      <BCardHeader header-tag="header" class="p-1" role="tab">
        <BButton block v-b-toggle.accordion-1 variant="info"
          >Accordion 1</BButton
        >
      </BCardHeader>
      <BCollapse
        id="accordion-1"
        visible
        accordion="my-accordion"
        role="tabpanel"
      >
        <BCardBody>
          <BCardText
            >I start opened because <code>visible</code> is
            <code>true</code></BCardText
          >
          <BCardText
            >Lorem, ipsum dolor sit amet consectetur adipisicing
            elit.</BCardText
          >
        </BCardBody>
      </BCollapse>
    </BCard>

    <BCard no-body class="mb-1">
      <BCardHeader header-tag="header" class="p-1" role="tab">
        <BButton block v-b-toggle.accordion-2 variant="info"
          >Accordion 2</BButton
        >
      </BCardHeader>
      <BCollapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <BCardBody>
          <BCardText
            >Lorem, ipsum dolor sit amet consectetur adipisicing
            elit.</BCardText
          >
        </BCardBody>
      </BCollapse>
    </BCard>

    <BCard no-body class="mb-1">
      <BCardHeader header-tag="header" class="p-1" role="tab">
        <BButton block v-b-toggle.accordion-3 variant="info"
          >Accordion 3</BButton
        >
      </BCardHeader>
      <BCollapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <BCardBody>
          <BCardText
            >Lorem, ipsum dolor sit amet consectetur adipisicing
            elit.</BCardText
          >
        </BCardBody>
      </BCollapse>
    </BCard>
  </div>
</template>

<script>
import {
  BCard,
  BCardHeader,
  BCardBody,
  BCollapse,
  BCardText,
  BButton,
  VBToggle
} from 'bootstrap-vue';

export default {
  components: { BCard, BCardHeader, BCardBody, BCollapse, BCardText, BButton },
  directives: { 'b-toggle': VBToggle }
};
</script>
