export class Branch {
    id:number = 0;
	name: string = ''; 
	address: string = ''; 
};

export class Vaccine {
    id: number = 0;
    name: string = '';
    price: number = 0;
    status: string = '';
    vaccinationDate: Date = new Date();
};

export class Application {
    id: number = 0;
    paymentType: string = '';
    appointment: Date = undefined;
    patientId : number = undefined;
	branchId : number = undefined;
    vaccineId : number = undefined;
    toEmail : string = undefined;
};