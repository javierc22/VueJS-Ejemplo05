Vue.component('hijo',{
   template: //html
   `
   <div class="p-5 bg-success text-white">
      <h4>Componente Hijo: {{ numero }}</h4>
   </div>
   `,
   props: ['numero']
});