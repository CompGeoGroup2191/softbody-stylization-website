<template>
  <div>
    <div class="display-3 center-title">{{meta.title}}</div>
    <div class="display-1 center-title">{{meta.subtitle}} - {{meta.date}}</div>


    <div class="update-text">
      <div class="headline font-weight-regular">Summary</div>
      <div>
        The purpose of this post is to summarize the work completed by our team for CSCI-716
        during the Fall 2019 semester. Our project focused on the stylization of softbody
        deformations. While we did not achieve all of our goals, we do have a finished
        product.
      </div>

      <div class="headline font-weight-regular">Team</div>
      <div>
        <ul>
          <li>Caleb Adrian - Shaders, Unity, Optimization</li>
          <li>Joe Klesczewski - Research, Misc. Development, Optimization</li>
          <li>Robert Nill - Website, StyleBlit, Unity, Documents</li>
          <li>Jimmy Moir - Softbody Physics, Optimization</li>
        </ul>
      </div>

      <div class="headline font-weight-regular">Inspiration and Problem Statement</div>
      <div>
        Our project was inspired by two interesting algorithms/problems. The first
        of which being StyleBlit, a real-time NPR rendering technique that works by applying
        patches of a texture onto a mesh based on surface normals. The second being the 
        general idea of softbody deformation. We were interested in seeing if StyleBlit could
        be used to apply a damage texture onto a deformed mesh. 
      </div>
      <v-img :src="require('../../assets/styleblitlive.gif')" 
        max-width="500" style="margin: 10px auto"/>
      <div class="subtitle font-weight-bold">Fig 1: StyleBlit Example</div>
      <v-img :src="require('../../assets/projcars.gif')" 
        max-width="500" style="margin: 10px auto"/>
      <div class="subtitle font-weight-bold">Fig 2: Project Cars Deformation</div>
      <div style="margin-top: 20px">
        Therefore, the problem can be formalized as such: Given a deforming mesh, adjust
        the texture and appearance of the mesh to give the end result a "damaged" appearance,
        even if the mesh returns to its original form.
      </div>

      <div class="headline font-weight-regular">Summary of Results</div>
      <div>
        Ultimately, we did not achieve all of our goals within the timeline that we 
        established at the start of the semester. 
      </div>
      <div style="margin-top: 20px">
        Our team originally intended to re-implement StyleBlit from the ground up in Unity
        and modify it to handle something other than surface normals. However, this ended up
        being a more difficult task than we had originally anticipated. We also determined that
        the StyleBlit implementation would then need to be significantly restructured. In 
        hindsight, we should've worked on designing our own algorithm and included that effort
        in our original timeline estimation: as a result, we ended up wasting a significant 
        portion of our semester going down a not-so-optimal route. 
      </div>
      <div style="margin-top: 20px">
        We decided to shift towards a simpler algorithm for styling, but kept the mesh deformation
        component of the project. Due to this late shift, we also had less time to work on assets for 
        interesting examples. The styling is handled by maintaining a "damage map", which maps 1:1 with
        each vertex. Abstractly it is a measure of how much the vertex has deformed, and allows for
        persistent texture changes. 
      </div>
      <div style="margin-top: 20px">
        We did experiment with an existing Unity implementation of StyleBlit while working on the 
        new styling algorithm in parallel. The results reinforced our assumption that significant
        refactoring would be required if we used vanilla StyleBlit, as much of the work is performed
        every frame in the shaders and leads to jittering/loss of temporal coherence.
      </div>

      <div class="headline font-weight-regular">Technical Details</div>
      <div>
        The high level inputs that we identified include:
        <ul>
          <li>Meshes (vertices, normals)</li>
          <li>Forces to deform mesh</li>
          <li>Base texture</li>
          <li>Damage texture</li>
          <li>Damage mapping</li>
        </ul>
      </div>
      <div style="margin-top: 20px">
        As far as outputs are concerned, the goal would be to adjust the texture of the mesh
        in areas that have been previously deformed. So the output is simply the appearance of
        a mesh, or a 2D texture. 
      </div>
      <div style="margin-top: 20px">
        The problem domain would be that of real-time computer graphics (visualizations, games, etc). 
        As a result, temporal coherence (level of visual changes from frame-to-frame) and performance
        of the algorithm are important factors. 
      </div>

      <div class="headline font-weight-regular">Implementation Details</div>
      <div>
        Our work was completed using Unity 2019 (C# + variant of HLSL). Our final implementation
        relies on a C# script that applies deformations to a mesh based on a force at a given point. 
        As deformations are applied, a maximum deformation value is persisted for each vertex of the
        mesh using UV channels (damage map). This value is used to interpolate between a base texture and a 
        damage texture. This could be extended to interpolate between other shader components as 
        well, but we've not experimented with anything beyond basic textures. 
      </div>
      <div class="title" style="margin-top: 20px">
        Deformation
      </div>
      <div>
        Forces are applied in a push manner, rather than a polling manner. An input script 
        determines which point on the mesh is being impacted and passes in an arbitrary force
        value, which then ripples throughout the rest of the mesh. 
      </div>
      <v-img :src="require('../../assets/seq_1.svg')" 
        max-width="900" style="margin: 10px auto"/>
      <div class="subtitle font-weight-bold">Fig 3: Deformation Input</div>
      <div class="title" style="margin-top: 20px">
        Deformation Stylization
      </div>
      <div>
        Every tick, the mesh and its vertices are updated to reflect the impact force and
        eventually return the mesh to its original shape. This gives our deformation a 
        jelly-like effect. Additionally, the damage value for each vertex is tracked. The max
        value is taken between the previous max value and the current damage value in order
        to persist damage. The mesh is rendered using a shader that accepts two textures (base
        and damage) and interpolates between them based on the damage. 
      </div>
      <v-img :src="require('../../assets/seq_2.svg')" 
        max-width="650" style="margin: 10px auto"/>
      <div class="subtitle font-weight-bold">Fig 4: Deformation and Damage Calculation</div>
      <div class="title" style="margin-top: 20px">
        Space and Time Complexity
      </div>
      <div>
        For both steps of the algorithm, we frame them in the context of a mesh made up of n vertices. 
        We loop over those vertices to update various components (position, normals) a constant number
        of times per update. As a result, we can bound the time complexity by O(n). In the context of 
        space complexity, we rely on several different channels associated with each vertex, but the
        number of channels is constant, leaving us with O(n) space complexity. 
      </div>

      <div class="headline font-weight-regular">Results</div>
      <iframe src="https://drive.google.com/file/d/1kkjBWSZXx4xxitHoJz_UGvgduqveET2t/preview" width="640" height="480"></iframe>

      <div class="headline font-weight-regular">Final Thoughts</div>
      <div>
        Our team was not fully satisfied with the results we achieved. We feel that while Unity made
        some things simpler, the learning time was a little steep compared to the time required for 
        creating a custom OpenGL/C++ framework. 
      </div>
      <div>
        With a little more time and effort, we would've liked to experiment with a more interesting 
        example than a vague sphere with stretch marks. Additionally, we would've loved to implement
        a patch-based approach that applied the damage in patches rather than continuously/smoothly.
      </div>

    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      meta: this.$store.state.update_meta[1]
    };
  }
};
</script>

<style>
.headline {
  border-bottom: 1px solid black;
  margin: 20px auto 10px auto;
}

.subtitle {
  text-align: center;
}
</style>
