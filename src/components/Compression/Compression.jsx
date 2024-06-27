import React from 'react';
import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { FormUpload } from './form-components';
import axios from 'axios';
import Compressor from 'compressorjs';

const App = () => {
  const handleSubmit = async (dataItem, formRenderProps) => {
    const formData = new FormData();

    if (dataItem.photos.length > 0) {
      await Promise.all(dataItem.photos.map(async (file) => {
        try {
          const compressedFile = await compressFile(file.getRawFile());
          formData.append('images', compressedFile, compressedFile.name);
        } catch (error) {
          console.error('Error compressing file:', error);
          throw new Error('Error compressing file:', error);
        }
      }));
    }
    console.log('FormData:', formData);

    try {
      const response = await axios.post('http://127.0.0.1:5000/upload', formData);
      console.log('Server Response:', response);
      console.log('Upload successful:', response.data);
      alert('Images uploaded successfully:', response);
    } catch (error) {
      console.error('Error uploading images:', error);
      alert('Error uploading images: ' + error.message);
    }
  };

  const compressFile = async (file) => {
    return new Promise((resolve, reject) => {
      new Compressor(file, {
        quality: 0.2,
        success(result) {
          resolve(result);
        },
        error(error) {
          reject(error);
        },
      });
    });
  };

  return (
    <div className='bg-slate-500 flex justify-center items-center h-screen'>
      <Form
        onSubmit={handleSubmit}
        render={(formRenderProps) => (
          <FormElement style={{ width: 400 }}>
            <div className="text-5xl text-white">
              Upload Photos
            </div>
            <Field
              id={'photos'}
              name={'photos'}
              hint={'You can also add photos in batch.'}
              component={FormUpload}
            />
            <div className="k-form-buttons">
              <Button themeColor={'primary'} type={'submit'} disabled={!formRenderProps.allowSubmit}>
                Submit
              </Button>
              <Button onClick={formRenderProps.onFormReset}>
                Clear
              </Button>
            </div>
          </FormElement>
        )}
      />
    </div>
  );
};

export default App;
