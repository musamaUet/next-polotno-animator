'use client'
import React from "react";
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';
import { Toolbar } from 'polotno/toolbar/toolbar';
import { PagesTimeline } from 'polotno/pages-timeline';
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';
import { SidePanel } from 'polotno/side-panel';
import { Workspace } from 'polotno/canvas/workspace';
import { DEFAULT_SECTIONS } from 'polotno/side-panel';
import { ChartSection, getChart } from './ChartSection';
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

    getChart({ data: [[25, 40, 10]], type: 'pie' }).then((src) => {
        store.activePage.addElement({
          type: 'svg',
          name: 'chart',
          x: store.width / 2 - 150,
          y: store.height / 2 - 150,
          width: 400,
          height: 300,
          src,
          custom: {
            data: [25, 40],
          },
        });
      });
    const sections: any = [ChartSection, ...DEFAULT_SECTIONS];

    return (
        <PolotnoContainer style={{ width: '100vw', height: '100vh' }}>
            <SidePanelWrap>
                <SidePanel store={store} sections={sections} />
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