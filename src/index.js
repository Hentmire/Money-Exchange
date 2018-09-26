// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var object = {};
  	if (currency <= 0) {
		return object;
	}
	if (currency > 10000) {
		object.error = "You are rich, my friend! We don't have so much coins for exchange";
		return object;
	}
	var N_H = Math.floor(currency / 50);
	object.H = N_H;
	if (N_H == 0) {
		delete object.H;
	}
	var N_Q = Math.floor( ( currency - 50*N_H ) / 25 );
	object.Q = N_Q;
	if (N_Q == 0) {
		delete object.Q;
	}
	var N_D = Math.floor( ( currency - 50*N_H - 25*N_Q ) / 10 );
	object.D = N_D;
	if (N_D == 0) {
		delete object.D;
	}
	var N_N = Math.floor( ( currency - 50*N_H - 25*N_Q- 10*N_D ) / 5 );
	object.N = N_N;
	if (N_N == 0) {
		delete object.N;    		
	}
	var N_P = Math.floor( currency - 50*N_H - 25*N_Q - 10*N_D - 5*N_N ); 
	object.P = N_P;
	if (N_P == 0) {
		delete object.P;
	}
	return object;
}
