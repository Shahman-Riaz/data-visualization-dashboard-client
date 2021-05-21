import React from 'react';
import { useForm } from 'react-hook-form';

const AddNewData = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const companyData = {
            end_year: data.end_year,
            intensity: data.intensity,
            sector: data.sector,
            topic: data.topic,
            insight: data.insight,
            url: data.url,
            region: data.region,
            start_year: data.start_year,
            impact: data.impact,
            added: data.added,
            published: data.published,
            country: data.country,
            relevance: data.relevance,
            pestle: data.pestle,
            source: data.source,
            title: data.title,
            likelihood: data.likelihood

        };


        fetch("https://peaceful-plains-79276.herokuapp.com/addNewData", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(companyData)
        })

            .then(result => {
                alert('Data added successfully');
                window.location.reload();
            })
    };


    return (
        <div className="p-3 container">
            <h4 className="mb-2">Input Data: </h4>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="on">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input type="text" {...register('end_year')} name="end_year" placeholder="input End Year" className="form-control w-75 m-2" />
                            {errors.end_year && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group">
                            <input type="text" {...register('intensity')} name="intensity" placeholder="input Intensity" className="form-control w-75 m-2" />
                            {errors.intensity && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group">
                            <input type="text" {...register('sector')} name="sector" placeholder="input Sector" className="form-control w-75 m-2" />
                            {errors.sector && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group">
                            <input type="text" {...register('topic')} name="topic" placeholder="input Topic" className="form-control w-75 m-2" />
                            {errors.topic && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group">
                            <input type="text" {...register('insight')} name="insight" placeholder="input Insight" className="form-control w-75 m-2" />
                            {errors.insight && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group">
                            <input type="text" {...register('url')} name="url" placeholder="input URL" className="form-control w-75 m-2" />
                            {errors.url && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group">
                            <input type="text" {...register('region')} name="region" placeholder="input Region" className="form-control w-75 m-2" />
                            {errors.region && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group">
                            <input type="text" {...register('start_year')} name="start_year" placeholder="input Start Year" className="form-control w-75 m-2" />
                            {errors.start_year && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group">
                            <input type="text" {...register('impact')} name="impact" placeholder="input Impact" className="form-control w-75 m-2" />
                            {errors.impact && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input type="text" {...register('added')} name="added" placeholder="input Added" className="form-control w-75 m-2" />
                            {errors.added && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <input type="text" {...register('published')} name="published" placeholder="input Published" className="form-control w-75 m-2" />
                            {errors.published && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <input type="text" {...register('country')} name="country" placeholder="input Country" className="form-control w-75 m-2" />
                            {errors.country && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <input type="text" {...register('relevance')} name="relevance" placeholder="input Relevance" className="form-control w-75 m-2" />
                            {errors.relevance && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <input type="text" {...register('pestle')} name="pestle" placeholder="input Pestle" className="form-control w-75 m-2" />
                            {errors.pestle && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <input type="text" {...register('source')} name="source" placeholder="input Source" className="form-control w-75 m-2" />
                            {errors.source && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <input type="text" {...register('title')} name="title" placeholder="input Title" className="form-control w-75 m-2" />
                            {errors.title && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <input type="text" {...register('likelihood')} name="likelihood" placeholder="input Likelihood" className="form-control w-75 m-2" />
                            {errors.likelihood && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>
                </div>

                <div className="form-group text-right">
                    <button type="submit" className="btn btn-primary m-2" >Send Data</button>
                </div>
            </form>
        </div>
    );
};

export default AddNewData;