import { EuiButton, EuiFieldNumber, EuiFieldText, EuiForm, EuiFormRow, EuiModal, EuiModalBody, EuiModalFooter, EuiModalHeader, EuiModalHeaderTitle, EuiSelect } from '@elastic/eui'
import React, { SetStateAction, useContext, useState } from 'react'
import { FlowContext } from '../context/FlowContext'
import axios from 'axios'

function CreationModal({ closeModal }: { closeModal: SetStateAction<any> }) {

    const [state, setState] = useState({
        isLoading: false,
        addChoice: 'default',
        nodeName: '',
        startNode: 'default',
        endNode: 'default',
        edgeDistance: '0',
        isGenerateLoading: false,
    })

    const { flow, setFlow, currentId, setCurrentId } = useContext(FlowContext)

    const handleAdd = async () => {
        setState({ ...state, isLoading: true })
        try {
            await new Promise(r => setTimeout(r, 1.5 * 1000));
            switch (state.addChoice) {
                case 'node':
                    if (currentId < 5) {
                        setFlow([...flow, {
                            id: currentId.toString(),
                            type: 'output', // input node
                            data: { label: state.nodeName },
                            position: { x: 250 * (currentId - 1), y: 25 }
                        }])
                    } else if (currentId >= 5 && currentId < 9) {
                        setFlow([...flow, {
                            id: currentId.toString(),
                            type: 'output', // input node
                            data: { label: state.nodeName },
                            position: { x: 250 * (currentId % 5), y: 75 }
                        }])
                    } else {
                        setFlow([...flow, {
                            id: currentId.toString(),
                            type: 'output', // input node
                            data: { label: state.nodeName },
                            position: { x: 250 * (currentId % 9), y: -25 }
                        }])
                    }
                    break;

                case 'edge':
                    if (state.startNode === state.endNode)
                        throw new Error(`You can't add an edge from and to the same node ?`);

                    if (state.edgeDistance === '0')
                        throw new Error(`No null edge allowed`);

                    flow.forEach((elt) => {
                        if (elt.id === `e${state.startNode}-${state.endNode}` ||
                            elt.id === `e${state.endNode}-${state.startNode}`)
                            throw new Error("Edge already defined");

                    })

                    setFlow(prev => prev.concat(
                        {
                            id: `e${state.startNode}-${state.endNode}`,
                            type: 'straight',
                            source: state.startNode,
                            target: state.endNode,
                            animated: true,
                            label: state.edgeDistance

                        }))
                    break;

                default:
                    break;

            }
            setCurrentId(currentId + 1)
            console.log(flow)
        } catch (error) {

        }
        finally {
            setState({ ...state, isLoading: false })
            closeModal()
        }
    }

    const handleGenerateDistance = async () => {
        try {
            setState({ ...state, isGenerateLoading: true })
            const origin = flow.filter((elt) => elt.id === state.startNode)[0].data.label;
            const destination = flow.filter((elt) => elt.id === state.endNode)[0].data.label;
            const { data } = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`);
            if (data.rows[0]['elements'][0]['distance']['text'].split(" ")[0])
                setState({ ...state, edgeDistance: data.rows[0]['elements'][0]['distance']['text'].split(" ")[0] })
            else
                throw new Error("Unable to find results");
        } catch (error) {

        } finally {
            setState({ ...state, isGenerateLoading: false })
        }
    }

    return (
        <EuiModal onClose={closeModal}>
            <EuiModalHeader>
                <EuiModalHeaderTitle><h1>Create a node or an edge</h1></EuiModalHeaderTitle>
            </EuiModalHeader>

            <EuiModalBody>
                <EuiForm component="div">
                    <EuiFormRow label="I want to add :">
                        <EuiSelect onChange={(e) => setState({ ...state, addChoice: e.target.value })} value={state.addChoice} options={[{ text: 'a node', value: 'node' }, { text: 'an edge', value: 'edge' }, { text: 'Choose an option', value: 'default' }]} />
                    </EuiFormRow>
                    {(state.addChoice === 'node') && <EuiFormRow label="Node name :">
                        <EuiFieldText
                            placeholder="Node 33"
                            value={state.nodeName}
                            onChange={e => setState({ ...state, nodeName: e.target.value })}
                        />
                    </EuiFormRow>}
                    {(state.addChoice === 'edge') && <>
                        <EuiFormRow label="From :">
                            <EuiSelect
                                value={state.startNode}
                                onChange={e => setState({ ...state, startNode: e.target.value })}
                                options={flow.filter((elt) => !(elt.id as String).startsWith('e')).map((elt) => ({ text: elt.data.label, value: elt.id })).concat({ text: 'Choose a starting node', value: 'default' })}
                            />
                        </EuiFormRow>
                        <EuiFormRow label="To :">
                            <EuiSelect
                                value={state.endNode}
                                onChange={e => setState({ ...state, endNode: e.target.value })}
                                options={flow.filter((elt) => !(elt.id as String).startsWith('e')).map((elt) => ({ text: elt.data.label, value: elt.id })).concat({ text: 'Choose an ending node', value: 'default' })}
                            />
                        </EuiFormRow>
                        <EuiFormRow label="Distance :">
                            <EuiFieldNumber value={state.edgeDistance} onChange={(e) => setState({ ...state, edgeDistance: e.target.value })} />
                        </EuiFormRow>
                        <EuiButton onClick={handleGenerateDistance}>Generate distance with google Maps</EuiButton>
                    </>}
                </EuiForm>
            </EuiModalBody>

            <EuiModalFooter>
                <EuiButton color="danger" onClick={closeModal} fill>Close</EuiButton>
                <EuiButton isLoading={state.isLoading} color="primary" onClick={handleAdd} fill>Add</EuiButton>
            </EuiModalFooter>
        </EuiModal>
    )
}

export default CreationModal
