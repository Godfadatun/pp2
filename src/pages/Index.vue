<template>
  
  <q-page class="row flex-center">
   <!--  <q-btn color="white" text-color="black" label="Standard" @click="get_data()" />
    {{api}}-->
    <!-- Here is the Couressell-->
    <div class="full-width">
      <div class="q-gutter-md">
        <q-carousel  v-model="slide" swipeable animated control-color="secondary" navigation
          padding arrows height="500px" class="shadow-1 rounded-borders"
        >
          <q-carousel-slide img-src="/statics/images/color-color-palette-colors-259714.jpg" name="style" class="column no-wrap flex-center">
            <q-icon name="style" size="56px"  color="secondary"/>
            <div class="q-mt-md text-center">
              <p class="q-md-lg"><b>{{'Design Services '}}</b></p>
              <q-btn color="white" outline  label="Make your Request" />
              
            </div>
          </q-carousel-slide>
          <q-carousel-slide img-src="/statics/images/celebrate-celebration-communication-296878.jpg" name="tv" class="column no-wrap flex-center">
            <q-icon name="card_giftcard" size="56px" color="secondary"/>
            <div class="q-mt-md text-center">
              <p class="q-md-lg"><b>{{'Gifts '}}</b></p>
              <q-btn color="white" outline  label="Make your Request" />
            </div>
          </q-carousel-slide>
          <q-carousel-slide img-src="/statics/images/building-business-close-up-2460434.jpg" name="layers" class="column no-wrap flex-center">
            <q-icon name="landscape" size="56px" color="secondary" />
            <div class="q-mt-md text-center q-pd-none q-md-none">
              <p class="q-md-lg"><b>{{'Outdoor Signage '}}</b></p>
                <q-btn color="white" outline  label="Make your Request" />
            </div>
          </q-carousel-slide>
          <q-carousel-slide img-src="/statics/images/black-black-and-white-black-white-6663.jpg" name="map" class="column no-wrap flex-center">
            <q-icon name="terrain" size="56px" color="secondary" />
            <div class="q-mt-md text-center">
              <p class="q-md-lg"><b>{{'Design Services '}}</b></p>
              <q-btn color="white" outline  label="Make your Request" />
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>

    <div class="row q-pa-md q-gutter-sm">
      <q-btn outline rounded color="secondary" label="All" />
      <q-btn outline rounded color="secondary" label="Paper" />
      <q-btn outline rounded color="secondary" label="Print on Signage" />
      <q-btn outline rounded color="secondary" label="Print" />
      <q-btn outline rounded color="secondary" label="Gifts" />
    </div>

    <div class="row">
      <div v-for="item in product_list" :key="item.id" class="row">
          <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12"></div>
            <q-card class="my-card">
                <q-card-section>
                  
                </q-card-section>
                <q-card-section class="text-center">
                  <div class="text-h6 text-center">{{item.product_name}}</div>
                  <div class="text-subtitle2 text-center">{{item.description}}</div>
                </q-card-section>
                <q-card-actions align="around">
                  <q-btn outline rounded color="red" icon="shopping_cart" @click="add_cart(item.id)" label="Add to Cart" :loading="loading"/>
                  <q-btn outline rounded color="teal" icon="credit_card" label="Buy Now" />
              </q-card-actions>
            </q-card>
          </div>
      </div>
    </div>{{userData}}

    </q-page>
  

</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      loading: false,
      slide: 'style',
      product_list: [],
    }
  },

  created() {
    this.get_data();
  },

  computed: {
    isLoggedIn: function(){return this.$store.getters['auth/isLoggedIn']},
    userData: function(){return this.$store.getters['auth/user']},
  },

  methods: {
    async get_data(){
      let res = await this.$axios.get('api/product')
      this.product_list = res.data.data
    },
    async add_cart(product_id){
      try{
        this.loading = true
        let res = await this.$axios.post('api/cart', {
          'user_id': 1,
          'product_id': product_id
        })
        this.$store.dispatch('auth/user')
        this.$q.notify({message: 'Successufully added to cart', color: 'secondary'});
        this.loading = false
      }catch(error){

      }
    }
  },
}
</script>

<style>
</style>