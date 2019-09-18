<template>
  <div>
    <div class="display-3 center-title">Project Overview</div>
    <div class="update-text">
      <div class="display-1">Preface</div>
      <v-divider style="max-width: 150px"/>
      <div style="margin-bottom: 20px;">
        StyleBlit (2018) is a realtime “example-based style transfer” algorithm that applies patches of stochastic textures to meshes based on a local guidance channel, such as surface normals or depth. 
      </div>
      
      <div class="display-1">Proposal</div>
      <v-divider style="max-width: 150px"/>
      <div style="margin-bottom: 20px;">
        We propose the application of this stylization algorithm to deformable meshes. Based on the amount of deformation, measured by guidance channel differences, a stochastic texture is applied to deformed areas of the mesh. As additional deformations occur, texture modifications will accumulate. 
      </div>

      <div class="display-1">Tech Stack</div>
      <v-divider style="max-width: 150px"/>
      <div style="margin-bottom: 20px;">
        The system will be implemented in Unity (C#, C++, HLSL variant) and target interactive performance. If need be, we'll explore implementing our softbody physics in another language and importing that work into Unity through a DLL file.
      </div>

      <div class="display-1">Target Timeline</div>
      <v-divider style="max-width: 150px"/>
      <div>
        <v-img src="../assets/timeline.svg"/>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {

    };
  }
};
</script>
