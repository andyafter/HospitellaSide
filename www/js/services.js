angular.module('starter.services', [])

.service('ClinicNameService', function(){
	// clinic name for updating the clinic information
	// and when the
	return{
		clinicName : 'clinic name!!!!',
		getClinicName: function(){
			return this.clinicName;
		}
	}

})

.service('AllClinicsService', function(){
	return{
		clinics: [],
		getClinics :function(){
			return this.clinics;
		},
		getPrefix : function(prefix){
			return [];
		}
	}

})