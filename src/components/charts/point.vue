<template>
  <div class="chart-container">
    <div ref="point" v-loading="loading" class="chart"></div>
    <p class="title">{{ title }}</p>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    isLoading: {
      type: Boolean,
      default: true
    },
    pointData: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      loading: true,
      chartDom: {}
    }
  },
  watch: {
    isLoading: {
      handler() {
        //  用于设置子组件为 Loading 状态
        this.loading = true
      }
    }
  },
  mounted() {
    this.chartDom = this.$echarts.init(this.$refs.point)
    this.initChart()
    this.upLoad()
  },
  methods: {
    upLoad() {
      this.$emit('fromSonComp', this.chartDom)
    },
    initChart() {
      var data = this.pointData
      setTimeout(() => {
        this.loading = false
      }, 300)
      const option = {
        backgroundColor: this.$echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
          offset: 0,
          color: '#f7f8fa'
        }, {
          offset: 1,
          color: '#cdd0d5'
        }]),
        legend: {
          top: 10,
          right: 100,
          data: ['今日', '昨日']
        },
        xAxis: {
          name: '平均工资',
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
            // show: false
          }
        },
        yAxis: {
          name: '占比',
          splitLine: {
            show: false
          },
          scale: true
        },
        series: [{
          name: '今日',
          data: data[0],
          type: 'scatter',
          symbolSize: function(data) {
            return data[2] * 5 //1e2 = 100
          },
          emphasis: {
            label: {
              show: true,
              formatter: function(param) {
                return param.data[3]
              },
              position: 'top'
            }
          },
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(120, 36, 50, 0.5)',
            shadowOffsetY: 5,
            color: this.$echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
              offset: 0,
              color: 'rgb(251, 118, 123)'
            }, {
              offset: 1,
              color: 'rgb(204, 46, 72)'
            }])
          }
        }, {
          name: '昨日',
          data: data[1],
          type: 'scatter',
          symbolSize: function(data) {
            return data[2] * 5 //1e2 = 100
          },
          emphasis: {
            label: {
              show: true,
              formatter: function(param) {
                return param.data[3]
              },
              position: 'top'
            }
          },
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(25, 100, 150, 0.5)',
            shadowOffsetY: 5,
            color: this.$echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
              offset: 0,
              color: 'rgb(129, 227, 238)'
            }, {
              offset: 1,
              color: 'rgb(25, 183, 207)'
            }])
          }
        }]
      }
      this.chartDom.setOption(option)
    }
  }

}
</script>

<style lang="scss">
@import '~@/styles/index.scss';
.chart-container {
  width: 100%;
  height: 100%;
  position: relative;
  .chart {
    width: 100%;
    height: 100%;
  }
  .title {
    @include title-line($pos-top: 10px, $pos-left: 30px);
  }
}
</style>
