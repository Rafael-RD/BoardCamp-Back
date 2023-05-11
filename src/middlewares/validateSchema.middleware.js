
export function validationSchema(schema){
    return(req, res, next)=>{
        const validationLog=schema.validate(req.body,{abortEarly: false});
        if(validationLog.error) return res.status(400).send(validationLog.error.detais.map((e)=>e.message));
        res.locals.validated=validationLog.value;
        next();
    }
}