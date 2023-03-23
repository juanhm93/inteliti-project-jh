<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreHistoriaMedicaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'nombre' => 'required',
            'fecha_nacimiento' => 'required|date',
            'sexo' => 'required',
            'estatura' => 'numeric|required|min:1|max:1000000',
            'peso' => 'numeric|required|between:0.00,299.99',
        ];
    }
}
