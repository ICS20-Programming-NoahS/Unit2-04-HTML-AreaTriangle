// Copyright (c) 2023 Noah Smith All rights reserved
//
// Created by: Noah Smith
// Created on: March 2023
// This file contains the JS functions for index.html

/**
 * This function calculates the area of a triangle.
 */
function calculatetriangle() {
  // calculations of the area of the triangle
  let height = parseFloat(document.getElementById("height-of-triangle").value);
  let base = parseFloat(document.getElementById("base-of-triangle").value);

  // calculating the area of the triangle
  let area = base * height /2;

  // display of the area of the triangle
  document.getElementById("area").innerHTML = 'The area is: ' + area + " cm²"
}