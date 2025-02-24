import { MutationTree } from 'vuex'
import UtilState from './UtilState'
import * as types from './mutation-types'

const mutations: MutationTree <UtilState> = {
    [types.UTIL_FACILITIES_UPDATED] (state, payload) {
        state.facilities = payload
    },
    [types.UTIL_FACILITY_LOCATIONS_BY_FACILITY_ID] (state, facilityLocations) {
        Object.keys(facilityLocations).map((facilityId: any) => {
            state.facilityLocationsByFacilityId[facilityId] = facilityLocations[facilityId];
        })
    },
}
export default mutations;