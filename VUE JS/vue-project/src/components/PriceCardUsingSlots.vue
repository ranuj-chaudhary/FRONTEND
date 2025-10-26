<template>
  <div class="pricing-card">
    <div class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-content">
        <slot></slot>
    </div>
    <div class="card-footer">
        <slot name="footer" ></slot>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.pricing-card {
  border: 1px solid #d0d1d7;
  border-radius: 8px;
  width: 340px;
  box-shadow: 0 4px 6px #f0f3fa;
  margin: 1.5rem;
  overflow: hidden;
}
.card-header, .card-footer {
  background: #f9fafc;
  padding: 1rem;
  text-align: center;
  font-weight: 600;
}
.card-content {
  padding: 1.25rem;
  text-align: center;
}

</style>
