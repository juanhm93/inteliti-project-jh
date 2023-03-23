<?php

namespace App\Http\Controllers;

use App\Models\HistoriaMedica;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
// use App\Http\Requests\StoreHistoriaMedicaRequest;

class HistoriaMedicaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $list_history = HistoriaMedica::all();

        return response()->json([
            'success' => true,
            'message' => 'Historia medica obteniendo correctamente',
            'data' => $list_history
        ]);
        // return view('home')->with(compact('list_history'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // HistoriaMedica::create($request->all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $history = HistoriaMedica::create($request->all());
        Log::info($history);
        if($history){
            return response()->json([
                'success' => true,
                'message' => 'Historia medica creada correctamente',
                'data' => $history
            ]);
        }else {
            return response()->json([
                'success' => false,
                'message' => 'Historia medica no se pudo crear',
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\HistoriaMedica  $historiaMedica
     * @return \Illuminate\Http\Response
     */
    public function show(HistoriaMedica $historiaMedica, $id)
    {
        $patient = HistoriaMedica::find($id);
        return response()->json([
            'success' => true,
            'message' => 'Datos del paciente obtenidos',
            'data' => $patient
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\HistoriaMedica  $historiaMedica
     * @return \Illuminate\Http\Response
     */
    public function edit(HistoriaMedica $historiaMedica)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\HistoriaMedica  $historiaMedica
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, HistoriaMedica $historiaMedica)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\HistoriaMedica  $historiaMedica
     * @return \Illuminate\Http\Response
     */
    public function destroy(HistoriaMedica $historiaMedica, $id)
    {
        $history = HistoriaMedica::find($id);

        $history->delete();

        return response()->json([
            'success' => true,
            'message' => 'Paciente eliminado correctamente',
        ]);
    }
}
