'use client'
import React from "react";
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';
import { Toolbar } from 'polotno/toolbar/toolbar';
import { PagesTimeline } from 'polotno/pages-timeline';
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';
import { SidePanel } from 'polotno/side-panel';
import { Workspace } from 'polotno/canvas/workspace';
import { DEFAULT_SECTIONS } from 'polotno/side-panel';
import { createStore } from 'polotno/model/store';
import axios from 'axios';
import '@blueprintjs/core/lib/css/blueprint.css';


const store: any = createStore({
    key: 'nFA5H9elEytDyPyvKL7T',
    showCredit: true,
  });
const page = store.addPage();
export default function Editor() {
    const handleClick = async () => {
        // const html = await store.toHTML();
        try {
            // const data = {};
            // const result = axios.post('http://localhost:4000/nifty-images', data);
            // console.log('result', result);
        } catch (err) {
            console.log('err', err);
        }
        console.log('json ', store.toJSON());
    }

    const customSections = DEFAULT_SECTIONS.filter(section => {
      // Add condition to exclude sections you don't want
      console.log('section', section);
      return section.name !== 'elements';
    });

    return (
        <PolotnoContainer style={{ width: '100vw', height: '100vh' }}>
            <SidePanelWrap>
                <SidePanel store={store} sections={customSections}/>
            </SidePanelWrap>
            <WorkspaceWrap>
                <Toolbar store={store} downloadButtonEnabled />
                <Workspace store={store} />
                <ZoomButtons store={store} />
                <PagesTimeline store={store} />
                <button onClick={handleClick}  style={{ position: 'absolute', top: 60, right: 5, zIndex: 1000 }}>
                    Save Design
                </button>
            </WorkspaceWrap>
        </PolotnoContainer>
    )}