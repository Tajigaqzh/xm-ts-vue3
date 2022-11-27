<template>
    <Tree :data="data"></Tree>
  </template>
  <script setup lang="ts">
  import Tree from "./Tree.vue";
  import { TreeType } from "../../types/index";
  
  const data = reactive<TreeType[]>([
    {
      name: "1",
      checked: false,
      children: [
        {
          name: "1-1",
          checked: false,
        },
        {
          name: "1-2",
          checked: true,
          children: [
            { name: "1-2-1", checked: false },
            {
              name: "1-2-2",
              checked: false,
              children: [{ name: "1-2-2-1", checked: false }],
            },
          ],
        },
        {
          name: "1-3",
          checked: false,
        },
      ],
    },
    {
      name: "2",
      checked: true,
      children: [
        {
          name: "2-1",
          checked: false,
        },
        {
          name: "2-2",
          checked: true,
          children: [
            {
              name: "2-2-2",
              checked: false,
            },
          ],
        },
      ],
    },
    {
      name: "3",
      checked: true,
      children: [
        {
          name: "3-1",
          checked: false,
        },
        {
          name: "3-2",
          checked: true,
        },
        {
          name: "3-3",
          checked: false,
        },
        {
          name: "3-4",
          checked: false,
        },
      ],
    },
  ]);
  </script>
  <style scoped lang="less"></style>
  