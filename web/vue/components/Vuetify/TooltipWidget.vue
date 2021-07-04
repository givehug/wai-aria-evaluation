<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on">
        Button
      </v-btn>
    </template>
    <span>Tooltip</span>
  </v-tooltip>
</template>
