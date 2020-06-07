(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66ce0350"],{1904:function(e,t,i){e.exports=i.p+"img/seq_1.8eb06a80.svg"},"1c5e":function(e,t,i){e.exports=i.p+"img/projcars.5ea4d10b.gif"},"38c0":function(e,t,i){e.exports=i.p+"img/seq_2.8917a125.svg"},"6bc5":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"display-3 center-title"},[e._v(e._s(e.meta.title))]),a("div",{staticClass:"display-1 center-title"},[e._v(e._s(e.meta.subtitle)+" - "+e._s(e.meta.date))]),a("div",{staticClass:"update-text"},[a("div",{staticClass:"headline font-weight-regular"},[e._v("Links")]),e._m(0),a("div",{staticClass:"headline font-weight-regular"},[e._v("Summary")]),a("div",[e._v("\n      The purpose of this post is to summarize the work completed by our team for CSCI-716\n      during the Fall 2019 semester. Our project focused on the stylization of softbody\n      deformations. While we did not achieve all of our goals, we do have a finished\n      product.\n    ")]),a("div",{staticClass:"headline font-weight-regular"},[e._v("Team")]),e._m(1),a("div",{staticClass:"headline font-weight-regular"},[e._v("Inspiration and Problem Statement")]),a("div",[e._v("\n      Our project was inspired by two interesting algorithms/problems. The first\n      of which being StyleBlit, a real-time NPR rendering technique that works by applying\n      patches of a texture onto a mesh based on surface normals. The second being the \n      general idea of softbody deformation. We were interested in seeing if StyleBlit could\n      be used to apply a damage texture onto a deformed mesh. \n    ")]),a("v-img",{staticStyle:{margin:"10px auto"},attrs:{src:i("7331"),"max-width":"500"}}),a("div",{staticClass:"subtitle font-weight-bold"},[e._v("Fig 1: StyleBlit Example")]),a("v-img",{staticStyle:{margin:"10px auto"},attrs:{src:i("1c5e"),"max-width":"500"}}),a("div",{staticClass:"subtitle font-weight-bold"},[e._v("Fig 2: Project Cars Deformation")]),a("div",{staticStyle:{"margin-top":"20px"}},[e._v('\n      Therefore, the problem can be formalized as such: Given a deforming mesh, adjust\n      the texture and appearance of the mesh to give the end result a "damaged" appearance,\n      even if the mesh returns to its original form.\n    ')]),a("div",{staticClass:"headline font-weight-regular"},[e._v("Summary of Results")]),a("div",[e._v("\n      Ultimately, we did not achieve all of our goals within the timeline that we \n      established at the start of the semester. \n    ")]),a("div",{staticStyle:{"margin-top":"20px"}},[e._v("\n      Our team originally intended to re-implement StyleBlit from the ground up in Unity\n      and modify it to handle something other than surface normals. However, this ended up\n      being a more difficult task than we had originally anticipated. We also determined that\n      the StyleBlit implementation would then need to be significantly restructured. In \n      hindsight, we should've worked on designing our own algorithm and included that effort\n      in our original timeline estimation: as a result, we ended up wasting a significant \n      portion of our semester going down a not-so-optimal route. \n    ")]),a("div",{staticStyle:{"margin-top":"20px"}},[e._v('\n      We decided to shift towards a simpler algorithm for styling, but kept the mesh deformation\n      component of the project. Due to this late shift, we also had less time to work on assets for \n      interesting examples. The styling is handled by maintaining a "damage map", which maps 1:1 with\n      each vertex. Abstractly it is a measure of how much the vertex has deformed, and allows for\n      persistent texture changes. \n    ')]),a("div",{staticStyle:{"margin-top":"20px"}},[e._v("\n      We did experiment with an existing Unity implementation of StyleBlit while working on the \n      new styling algorithm in parallel. The results reinforced our assumption that significant\n      refactoring would be required if we used vanilla StyleBlit, as much of the work is performed\n      every frame in the shaders and leads to jittering/loss of temporal coherence.\n    ")]),a("div",{staticClass:"headline font-weight-regular"},[e._v("Technical Details")]),e._m(2),a("div",{staticStyle:{"margin-top":"20px"}},[e._v("\n      As far as outputs are concerned, the goal would be to adjust the texture of the mesh\n      in areas that have been previously deformed. So the output is simply the appearance of\n      a mesh, or a 2D texture. \n    ")]),a("div",{staticStyle:{"margin-top":"20px"}},[e._v("\n      The problem domain would be that of real-time computer graphics (visualizations, games, etc). \n      As a result, temporal coherence (level of visual changes from frame-to-frame) and performance\n      of the algorithm are important factors. \n    ")]),a("div",{staticClass:"headline font-weight-regular"},[e._v("Implementation Details")]),a("div",[e._v("\n      Our work was completed using Unity 2019 (C# + variant of HLSL). Our final implementation\n      relies on a C# script that applies deformations to a mesh based on a force at a given point. \n      As deformations are applied, a maximum deformation value is persisted for each vertex of the\n      mesh using UV channels (damage map). This value is used to interpolate between a base texture and a \n      damage texture. This could be extended to interpolate between other shader components as \n      well, but we've not experimented with anything beyond basic textures. \n    ")]),a("div",{staticClass:"title",staticStyle:{"margin-top":"20px"}},[e._v("\n      Deformation\n    ")]),a("div",[e._v("\n      Forces are applied in a push manner, rather than a polling manner. An input script \n      determines which point on the mesh is being impacted and passes in an arbitrary force\n      value, which then ripples throughout the rest of the mesh. \n    ")]),a("v-img",{staticStyle:{margin:"10px auto"},attrs:{src:i("1904"),"max-width":"900"}}),a("div",{staticClass:"subtitle font-weight-bold"},[e._v("Fig 3: Deformation Input")]),a("div",{staticClass:"title",staticStyle:{"margin-top":"20px"}},[e._v("\n      Deformation Stylization\n    ")]),a("div",[e._v("\n      Every tick, the mesh and its vertices are updated to reflect the impact force and\n      eventually return the mesh to its original shape. This gives our deformation a \n      jelly-like effect. Additionally, the damage value for each vertex is tracked. The max\n      value is taken between the previous max value and the current damage value in order\n      to persist damage. The mesh is rendered using a shader that accepts two textures (base\n      and damage) and interpolates between them based on the damage. \n    ")]),a("v-img",{staticStyle:{margin:"10px auto"},attrs:{src:i("38c0"),"max-width":"650"}}),a("div",{staticClass:"subtitle font-weight-bold"},[e._v("Fig 4: Deformation and Damage Calculation")]),a("div",{staticClass:"title",staticStyle:{"margin-top":"20px"}},[e._v("\n      Space and Time Complexity\n    ")]),a("div",[e._v("\n      For both steps of the algorithm, we frame them in the context of a mesh made up of n vertices. \n      We loop over those vertices to update various components (position, normals) a constant number\n      of times per update. As a result, we can bound the time complexity by O(n). In the context of \n      space complexity, we rely on several different channels associated with each vertex, but the\n      number of channels is constant, leaving us with O(n) space complexity. \n    ")]),a("div",{staticClass:"headline font-weight-regular"},[e._v("Results")]),a("iframe",{attrs:{src:"https://drive.google.com/file/d/1kkjBWSZXx4xxitHoJz_UGvgduqveET2t/preview",width:"640",height:"480"}}),a("div",{staticClass:"headline font-weight-regular"},[e._v("Final Thoughts")]),a("div",[e._v("\n      Our team was not fully satisfied with the results we achieved. We feel that while Unity made\n      some things simpler, the learning time was a little steep compared to the time required for \n      creating a custom OpenGL/C++ framework. \n    ")]),a("div",[e._v("\n      With a little more time and effort, we would've liked to experiment with a more interesting \n      example than a vague sphere with stretch marks. Additionally, we would've loved to implement\n      a patch-based approach that applied the damage in patches rather than continuously/smoothly.\n    ")])],1)])},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("ul",[i("li",[i("a",{attrs:{href:"https://github.com/JoeKlesczewski/CompGeoUnity"}},[e._v("Our GitHub with the latest work")])]),i("li",[i("a",{attrs:{href:"https://github.com/CompGeoGroup2191"}},[e._v("Our org with this website's source code")])])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("ul",[i("li",[e._v("Caleb Adrian - Shaders, Unity, Optimization")]),i("li",[e._v("Joe Klesczewski - Research, Misc. Development, Optimization")]),i("li",[e._v("Robert Nill - Website, StyleBlit, Unity, Documents")]),i("li",[e._v("Jimmy Moir - Softbody Physics, Optimization")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e._v("\n      The high level inputs that we identified include:\n      "),i("ul",[i("li",[e._v("Meshes (vertices, normals)")]),i("li",[e._v("Forces to deform mesh")]),i("li",[e._v("Base texture")]),i("li",[e._v("Damage texture")]),i("li",[e._v("Damage mapping")])])])}],s={data(){return{meta:this.$store.state.update_meta[1]}}},o=s,r=(i("cf3a"),i("2877")),l=i("6544"),h=i.n(l),d=i("adda"),m=Object(r["a"])(o,a,n,!1,null,null,null);t["default"]=m.exports;h()(m,{VImg:d["a"]})},7331:function(e,t,i){e.exports=i.p+"img/styleblitlive.db1a9def.gif"},"8da7":function(e,t,i){},cf3a:function(e,t,i){"use strict";var a=i("8da7"),n=i.n(a);n.a}}]);
//# sourceMappingURL=chunk-66ce0350.ec4953b3.js.map